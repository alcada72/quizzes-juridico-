import colors from "@/constants/colors";
import { resumoCGT } from "@/constants/questionst/resume";
import type { SummaryCategory } from "@/constants/questionst/resume/types";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

type Filter = SummaryCategory | "all";

const filters: {
  id: Filter;
  label: string;
  icon: keyof typeof Feather.glyphMap;
}[] = [
  {
    id: "all",
    label: "Todos",
    icon: "grid",
  },
  {
    id: "prazos",
    label: "Prazos",
    icon: "clock",
  },
  {
    id: "juros",
    label: "Juros",
    icon: "percent",
  },
  {
    id: "percentagens",
    label: "Multas",
    icon: "bar-chart-2",
  },
  {
    id: "valores",
    label: "Valores",
    icon: "dollar-sign",
  },
];

const categoryInfo: Record<
  SummaryCategory,
  {
    title: string;
    icon: keyof typeof Feather.glyphMap;
  }
> = {
  prazos: {
    title: "Prazos",
    icon: "clock",
  },
  juros: {
    title: "Juros",
    icon: "percent",
  },
  percentagens: {
    title: "Percentagens",
    icon: "bar-chart-2",
  },
  valores: {
    title: "Valores",
    icon: "dollar-sign",
  },
  procedimentos: {
    title: "Procedimentos",
    icon: "file-text",
  },
};

export default function Page() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resumoCGT.items.filter((item) => {
      const matchesCategory =
        activeFilter === "all" || item.category === activeFilter;

      if (!query) {
        return matchesCategory;
      }

      const searchableText = [
        item.label,
        item.value,
        item.description,
        item.article,
        item.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [activeFilter, search]);

  const groupedItems = useMemo(() => {
    if (activeFilter !== "all") {
      return [
        {
          category: activeFilter,
          items: filteredItems,
        },
      ];
    }

    const groups = new Map<SummaryCategory, typeof filteredItems>();

    filteredItems.forEach((item) => {
      const current = groups.get(item.category) ?? [];

      groups.set(item.category, [...current, item]);
    });

    return Array.from(groups.entries()).map(([category, items]) => ({
      category,
      items,
    }));
  }, [activeFilter, filteredItems]);

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar backgroundColor={colors.primary} style="light" />
      {/* Header background */}
      <View
        className="absolute hidden left-0 top-0 h-[260px] w-full"
        style={{
          backgroundColor: colors.primary,
          borderBottomLeftRadius: 90,
          borderBottomRightRadius: 90,
        }}
      />

      {/* Header */}
      <View className="z-10 px-4 mt-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Text className="text-3xl font-black text-blue-700">
              Revisão rápida
            </Text>

            <Text className="mt-1 text-base font-medium text-indigo-500">
              Consulte os pontos mais importantes do CGT
            </Text>
          </View>

          <View className="size-12 items-center justify-center rounded-2xl bg-white/15">
            <Feather name="book-open" size={24} color={colors.white} />
          </View>
        </View>

        {/* Search */}
        <View className="mt-6 flex-row items-center rounded-2xl px-4 bg-white px-4 py-3">
          <Feather name="search" size={20} color="#64748b" />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Pesquisar prazo, artigo, juros..."
            placeholderTextColor="#94a3b8"
            className="ml-3 flex-1 text-base text-slate-800"
            returnKeyType="search"
          />

          {search.length > 0 && (
            <Pressable
              onPress={() => setSearch("")}
              className="size-7 items-center justify-center rounded-full bg-slate-100"
            >
              <Feather name="x" size={16} color="#475569" />
            </Pressable>
          )}
        </View>
      </View>

      {/* Filters */}
      <View className="mt-5 px-4 pb-2">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-2"
        >
          {filters.map((filter) => {
            const active = activeFilter === filter.id;

            return (
              <Pressable
                key={filter.id}
                onPress={() => setActiveFilter(filter.id)}
                className={`flex-row items-center rounded-full px-4 py-2.5 ${
                  active ? "bg-indigo-600" : "border border-slate-200 bg-white"
                }`}
              >
                <Feather
                  name={filter.icon}
                  size={16}
                  color={active ? colors.white : "#475569"}
                />

                <Text
                  className={`ml-2 font-bold ${
                    active ? "text-white" : "text-slate-600"
                  }`}
                >
                  {filter.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="px-4 pb-10"
      >
        {/* Counter */}
        <View className="mt-6 flex-row items-center justify-between">
          <View>
            <Text className="text-2xl font-black text-slate-800">
              {activeFilter === "all"
                ? "Resumo do CGT"
                : categoryInfo[activeFilter].title}
            </Text>

            <Text className="mt-1 text-sm text-slate-500">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "item" : "itens"} encontrados
            </Text>
          </View>

          <View className="size-11 items-center justify-center rounded-2xl bg-indigo-100">
            <Feather
              name={
                activeFilter === "all"
                  ? "layers"
                  : categoryInfo[activeFilter].icon
              }
              size={21}
              color="#4f46e5"
            />
          </View>
        </View>

        {/* Content */}
        <View className="mt-5">
          {filteredItems.length === 0 ? (
            <EmptyState
              search={search}
              onClear={() => {
                setSearch("");
                setActiveFilter("all");
              }}
            />
          ) : (
            groupedItems.map((group) => (
              <View key={group.category} className="mb-6">
                {/* Category title */}
                {activeFilter === "all" && (
                  <View className="mb-3 flex-row items-center">
                    <View className="size-9 items-center justify-center rounded-xl bg-indigo-100">
                      <Feather
                        name={categoryInfo[group.category].icon}
                        size={18}
                        color="#4f46e5"
                      />
                    </View>

                    <Text className="ml-3 text-lg font-black text-slate-800">
                      {categoryInfo[group.category].title}
                    </Text>
                  </View>
                )}

                {/* Cards */}
                {group.items.map((item) => (
                  <SummaryCard key={item.id} item={item} />
                ))}
              </View>
            ))
          )}
        </View>

        {/* Footer tip */}
        {filteredItems.length > 0 && (
          <View className="mt-2 rounded-3xl bg-indigo-600 p-5">
            <View className="flex-row items-start">
              <View className="mr-4 size-11 items-center justify-center rounded-2xl bg-white/15">
                <Feather name="info" size={21} color={colors.white} />
              </View>

              <View className="flex-1">
                <Text className="text-base font-black text-white">
                  Dica de estudo
                </Text>

                <Text className="mt-1 text-sm leading-5 text-indigo-100">
                  Tenta memorizar primeiro os números e depois associa cada um
                  ao respectivo artigo do Código Geral Tributário.
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function SummaryCard({ item }: { item: (typeof resumoCGT.items)[number] }) {
  return (
    <View className="mb-3 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <View className="p-5">
        {/* Label */}
        <View className="flex-row items-start justify-between">
          <Text className="flex-1 pr-4 text-base font-bold leading-6 text-slate-700">
            {item.label}
          </Text>

          {item.article && (
            <View className="rounded-lg bg-slate-100 px-2.5 py-1.5">
              <Text className="text-xs font-bold text-slate-500">
                {item.article}
              </Text>
            </View>
          )}
        </View>

        {/* Main value */}
        <Text className="mt-4 text-3xl font-black text-indigo-600">
          {item.value}
        </Text>

        {/* Description */}
        {item.description && (
          <View className="mt-3 flex-row items-start">
            <Feather
              name="info"
              size={15}
              color="#94a3b8"
              style={{ marginTop: 3, marginRight: 7 }}
            />

            <Text className="flex-1 text-sm leading-5 text-slate-500">
              {item.description}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

function EmptyState({
  search,
  onClear,
}: {
  search: string;
  onClear: () => void;
}) {
  return (
    <View className="items-center rounded-3xl border border-slate-200 bg-white px-6 py-10">
      <View className="size-16 items-center justify-center rounded-3xl bg-slate-100">
        <Feather name="search" size={28} color="#94a3b8" />
      </View>

      <Text className="mt-4 text-xl font-black text-slate-800">
        Nada encontrado
      </Text>

      <Text className="mt-2 text-center text-sm leading-5 text-slate-500">
        Não encontramos nenhum resumo
        {search ? ` para "${search}"` : ""}.
      </Text>

      <Pressable
        onPress={onClear}
        className="mt-5 rounded-2xl bg-indigo-600 px-5 py-3"
      >
        <Text className="font-bold text-white">Limpar filtros</Text>
      </Pressable>
    </View>
  );
}
