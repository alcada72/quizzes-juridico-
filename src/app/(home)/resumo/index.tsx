import colors from "@/constants/colors";
import { SummaryItem } from "@/constants/questionst_cgt/resume/types";
import { Resumos } from "@/constants/resumos";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

type FilterType =
  "all" | "prazos" | "juros" | "percentagens" | "valores" | "procedimentos";

interface FilterOption {
  id: FilterType;
  label: string;
  icon: keyof typeof Feather.glyphMap;
}

const filters: FilterOption[] = [
  { id: "all", label: "Todos", icon: "grid" },
  { id: "prazos", label: "Prazos", icon: "clock" },
  { id: "juros", label: "Juros", icon: "percent" },
  { id: "percentagens", label: "Multas", icon: "bar-chart-2" },
  { id: "valores", label: "Valores", icon: "dollar-sign" },
];

const categoryInfo: Record<
  Exclude<FilterType, "all">,
  { title: string; icon: keyof typeof Feather.glyphMap }
> = {
  prazos: { title: "Prazos", icon: "clock" },
  juros: { title: "Juros", icon: "percent" },
  percentagens: { title: "Percentagens", icon: "bar-chart-2" },
  valores: { title: "Valores", icon: "dollar-sign" },
  procedimentos: { title: "Procedimentos", icon: "file-text" },
};

export default function Page() {
  const { resumeId } = useLocalSearchParams<{ resumeId: string }>();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return Resumos[resumeId].items.filter((item) => {
      const matchesCategory =
        activeFilter === "all" || item.category === activeFilter;

      if (!query) return matchesCategory;

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
  }, [activeFilter, resumeId, search]);

  const groupedItems = useMemo(() => {
    if (activeFilter !== "all") {
      return [
        {
          category: activeFilter as Exclude<FilterType, "all">,
          items: filteredItems,
        },
      ];
    }

    const groups = new Map<Exclude<FilterType, "all">, typeof filteredItems>();

    filteredItems.forEach((item) => {
      const cat = item.category as Exclude<FilterType, "all">;
      const current = groups.get(cat) ?? [];
      groups.set(cat, [...current, item]);
    });

    return Array.from(groups.entries()).map(([category, items]) => ({
      category,
      items,
    }));
  }, [activeFilter, filteredItems]);

  return (
    <View className="flex-1 bg-slate-50">
      <View
        className="absolute left-0 top-0 h-[220px] w-full"
        style={{
          backgroundColor: colors.primary,
          borderBottomLeftRadius: 36,
          borderBottomRightRadius: 36,
        }}
      />

      {/* Cabeçalho */}
      <View className="z-10 px-5 pt-12">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Text className="text-3xl font-black text-white">
              Revisão rápida
            </Text>
            <Text className="mt-1 text-sm font-medium text-blue-100">
              Consulte os pontos mais importantes do {Resumos[resumeId].title}
            </Text>
          </View>

          <View className="size-12 items-center justify-center rounded-2xl bg-white/20">
            <Feather name="book-open" size={22} color={colors.white} />
          </View>
        </View>

        {/* Campo de Pesquisa */}
        <View className="mt-6 flex-row items-center rounded-2xl bg-white px-4 py-3 shadow-sm border border-slate-100">
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
              <Feather name="x" size={14} color="#475569" />
            </Pressable>
          )}
        </View>
      </View>

      {/* Filtros em Carrossel */}
      <View className="mt-4 px-5">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        >
          {filters.map((filter) => {
            const active = activeFilter === filter.id;
            return (
              <Pressable
                key={filter.id}
                onPress={() => setActiveFilter(filter.id)}
                className={`flex-row items-center rounded-full px-4 py-2.5 shadow-sm ${
                  active ? "bg-blue-600" : "border border-slate-200 bg-white"
                }`}
              >
                <Feather
                  name={filter.icon}
                  size={15}
                  color={active ? colors.white : "#475569"}
                />
                <Text
                  className={`ml-2 text-sm font-bold ${
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

      {/* Conteúdo Principal */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="px-5 pb-12 pt-4"
      >
        {/* Totalizador */}
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-xl font-black text-slate-800">
              {activeFilter === "all"
                ? Resumos[resumeId].title
                : categoryInfo[activeFilter]?.title}
            </Text>
            <Text className="mt-0.5 text-xs font-medium text-slate-500">
              {filteredItems.length}{" "}
              {filteredItems.length === 1
                ? "item encontrado"
                : "itens encontrados"}
            </Text>
          </View>

          <View className="size-10 items-center justify-center rounded-xl bg-blue-50">
            <Feather
              name={
                activeFilter === "all"
                  ? "layers"
                  : categoryInfo[activeFilter]?.icon
              }
              size={18}
              color="#2563eb"
            />
          </View>
        </View>

        {/* Lista dos Grupos */}
        <View className="mt-4">
          {filteredItems.length === 0 ? (
            <EmptyState
              search={search}
              onClear={() => {
                setSearch("");
                setActiveFilter("all");
              }}
            />
          ) : (
            groupedItems.map((group) => {
              const info = categoryInfo[group.category];
              return (
                <View key={group.category} className="mb-5">
                  {activeFilter === "all" && info && (
                    <View className="mb-3 flex-row items-center">
                      <View className="size-8 items-center justify-center rounded-lg bg-blue-100">
                        <Feather name={info.icon} size={16} color="#2563eb" />
                      </View>
                      <Text className="ml-2.5 text-base font-extrabold text-slate-800">
                        {info.title}
                      </Text>
                    </View>
                  )}

                  {group.items.map((item) => (
                    <SummaryCard key={item.id} item={item} />
                  ))}
                </View>
              );
            })
          )}
        </View>

        {/* Dica de estudo */}
        {filteredItems.length > 0 && (
          <View className="mt-2 rounded-2xl bg-blue-600 p-4 shadow-sm">
            <View className="flex-row items-start">
              <View className="mr-3 size-10 items-center justify-center rounded-xl bg-white/20">
                <Feather name="zap" size={18} color={colors.white} />
              </View>

              <View className="flex-1">
                <Text className="text-sm font-black text-white">
                  Dica de Estudo
                </Text>
                <Text className="mt-1 text-xs leading-4 text-blue-100">
                  Memorize primeiro os valores numéricos principais e associe
                  aos artigos correspondentes do Código Geral Tributário.
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function SummaryCard({ item }: Readonly<{ item: SummaryItem }>) {
  return (
    <View className="mb-3 overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <View className="flex-row items-start justify-between">
        <Text className="flex-1 pr-3 text-sm font-bold leading-5 text-slate-700">
          {item.label}
        </Text>

        {item.article && (
          <View className="rounded-md bg-slate-100 px-2 py-1">
            <Text className="text-[11px] font-bold text-slate-600">
              {item.article}
            </Text>
          </View>
        )}
      </View>

      <Text className="mt-2 text-2xl font-black text-blue-600">
        {item.value}
      </Text>

      {item.description && (
        <View className="mt-2 flex-row items-start pt-2 border-t border-slate-50">
          <Feather
            name="info"
            size={13}
            color="#94a3b8"
            style={{ marginTop: 2, marginRight: 6 }}
          />
          <Text className="flex-1 text-xs leading-4 text-slate-500">
            {item.description}
          </Text>
        </View>
      )}
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
    <View className="items-center rounded-2xl border border-slate-100 bg-white px-6 py-8 shadow-sm">
      <View className="size-14 items-center justify-center rounded-2xl bg-slate-100">
        <Feather name="search" size={24} color="#94a3b8" />
      </View>

      <Text className="mt-3 text-lg font-black text-slate-800">
        Nenhum resultado
      </Text>

      <Text className="mt-1 text-center text-xs leading-4 text-slate-500">
        Não encontramos termos correspondentes a{" "}
        {search ? `"${search}"` : "categoria selecionada"}.
      </Text>

      <Pressable
        onPress={onClear}
        className="mt-4 rounded-xl bg-blue-600 px-4 py-2.5"
      >
        <Text className="text-xs font-bold text-white">Limpar Filtros</Text>
      </Pressable>
    </View>
  );
}
