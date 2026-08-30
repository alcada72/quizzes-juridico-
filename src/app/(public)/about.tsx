import colors from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName=" pb-10"
    >
      <View
        className=" px-5 pb-8 pt-6"
        style={{
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          backgroundColor: colors.primary,
        }}
      >
        <View className="items-center">
          <View className="size-20 items-center justify-center rounded-3xl bg-white/15">
            <Feather name="book-open" size={38} color={colors.white} />
          </View>

          <Text className="mt-4 text-3xl font-black text-white">
            Sobre o App
          </Text>

          <Text className="mt-2 text-center text-base font-medium text-blue-100">
            Aprenda, pratique e revise a Legislação Fiscal angolana.
          </Text>
        </View>
      </View>
      <View className="px-5">
        {/* About */}
        <View className="mt-6  rounded-3xl border border-slate-200 bg-white p-5">
          <View className="flex-row items-center">
            <View className="size-11 items-center justify-center rounded-2xl bg-blue-100">
              <Feather name="info" size={22} color={colors.primary} />
            </View>

            <Text className="ml-3 text-xl font-black text-slate-800">
              Sobre a aplicação
            </Text>
          </View>

          <Text className="mt-4 text-base leading-6 text-slate-600">
            Esta aplicação foi desenvolvida para facilitar o estudo e a revisão
            de conteúdos relacionados à Legislação Fiscal de Angola.
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            Através de questionários, resumos e acompanhamento do progresso,
            podes testar os teus conhecimentos e reforçar os conteúdos mais
            importantes.
          </Text>
        </View>

        {/* Funcionalidades */}
        <View className="mt-4  rounded-3xl border border-slate-200 bg-white p-5">
          <Text className="text-xl font-black text-slate-800">
            O que podes fazer?
          </Text>

          <Feature
            icon="help-circle"
            title="Responder o questionário"
            description="Testa os teus conhecimentos através de perguntas de escolha múltipla, verdadeiro ou falso e perguntas abertas."
          />

          <Feature
            icon="book-open"
            title="Consultar resumos"
            description="Revê rapidamente prazos, taxas, percentagens, valores e outros pontos importantes."
          />

          <Feature
            icon="trending-up"
            title="Acompanhar o progresso"
            description="Consulta a tua pontuação, XP, respostas corretas e evolução nos questionários."
          />

          <Feature
            icon="clock"
            title="Desafiar os teus conhecimentos"
            description="Responde às perguntas dentro do tempo disponível e melhora a tua pontuação."
          />
        </View>

        {/* Conteúdos */}
        <View className="mt-4 hidden rounded-3xl border border-slate-200 bg-white p-5">
          <Text className="text-xl font-black text-slate-800">
            Conteúdos disponíveis
          </Text>

          <View className="mt-4 gap-3">
            <ContentItem
              icon="file-text"
              title="Código Geral Tributário"
              description="Estudo e revisão dos principais temas do CGT."
            />

            <ContentItem
              icon="briefcase"
              title="Imposto Industrial"
              description="Conteúdos relacionados com o Imposto Industrial em Angola."
            />
          </View>
        </View>

        {/* Sobre o criador */}
        <View className="mt-4 rounded-3xl border border-slate-200 bg-white p-5">
          <View className="flex-row items-center">
            <View className="size-11 items-center justify-center rounded-2xl bg-blue-100">
              <Feather name="user" size={22} color={colors.primary} />
            </View>

            <Text className="ml-3 text-xl font-black text-slate-800">
              Sobre o criador
            </Text>
          </View>

          <View className="mt-5 items-center">
            {/* Foto/Avatar */}
            <View
              style={{ backgroundColor: colors.primary, borderRadius: 99999 }}
              className="size-24 items-center justify-center rounded-full"
            >
              <Feather name="user" size={42} color={colors.white} />
            </View>

            <Text className="mt-4 text-2xl font-black text-slate-800">
              Eng. Joaquim Lofa
            </Text>

            <Text
              style={{ color: colors.primary }}
              className="mt-1 text-center text-sm font-medium"
            >
              Desenvolvedor da aplicação
            </Text>
          </View>

          <Text className="mt-5 text-center text-base leading-6 text-slate-600">
            Esta aplicação nasceu como parte do projecto da turma
            <Text className="font-black"> AQUISIÇÃO ESPECIAL</Text> com o
            objetivo de tornar o estudo da Legislação Fiscal angolana mais
            simples, prático e acessível.
          </Text>

          <Text className="mt-3 text-center text-base leading-6 text-slate-600">
            A ideia é transformar o estudo tradicional em uma experiência mais
            interativa, permitindo aprender através de questionários, revisões
            rápidas e acompanhamento do progresso.
          </Text>

          {/* Contactos / Links */}
          <View className="mt-5 flex-row justify-center gap-3">
            <View className="flex-row items-center rounded-xl bg-slate-100 px-4 py-3">
              <Feather name="smartphone" size={18} color="#334155" />

              <Text className="ml-2 text-sm font-bold text-slate-700">
                +244 924 398 742
              </Text>
            </View>

            <View className="flex-row items-center rounded-xl bg-slate-100 px-4 py-3">
              <Feather name="mail" size={18} color="#334155" />

              <Text className="ml-2 text-sm font-bold text-slate-700">
                joaquimlofa@gmail.com
              </Text>
            </View>
          </View>
        </View>

        {/* Comunidade */}
        <View className="mt-4 rounded-3xl border border-slate-200 bg-white p-5">
          <View className="flex-row items-center">
            <View className="size-11 items-center justify-center rounded-2xl bg-blue-100">
              <Feather name="users" size={22} color={colors.primary} />
            </View>

            <Text className="ml-3 text-xl font-black text-slate-800">
              Comunidade
            </Text>
          </View>

          <View className="mt-5 gap-1">
            <Text className="text-lg mb-3 text-slate-600">
              Quero dixar o meu agredecimento especial a 3 pessoas que foram
              fundamentais:
            </Text>
            <ComunitPerson name="Valdik Hone" dec="Pelo idealismo e visão" />
            <ComunitPerson
              name="João Lucas"
              dec="Por dar vida vidas com o conteudo"
            />
            <ComunitPerson
              name="Rosimer Praia"
              dec="Pela inspiração e motivação"
            />
            <View className="rounded-lg bg-gray-200 p-2 mt-3">
              <Text className="text-base mb-3 text-slate-900">
                E obrigado a toda turma AQUISIÇÃO ESPECIAL. Sem vocês, nada
                disso seria possivel.
              </Text>
            </View>
          </View>
        </View>

        {/* Aviso */}
        <View className="mt-4 rounded-3xl bg-yellow-50 p-5">
          <View className="flex-row items-start">
            <View className="mr-3 size-10 items-center justify-center rounded-2xl bg-yellow-100">
              <Feather name="alert-circle" size={21} color="#ca8a04" />
            </View>

            <View className="flex-1">
              <Text className="text-base font-black text-yellow-800">
                Nota importante
              </Text>

              <Text className="mt-1 text-sm leading-5 text-yellow-700">
                Esta aplicação tem finalidade educativa. Para questões jurídicas
                ou fiscais concretas, consulta sempre a legislação oficial e
                fontes competentes.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Version */}
      <View className="mt-6 items-center">
        <Text className="text-sm font-bold text-slate-500">
          Versão {Constants.expoConfig?.version}
        </Text>

        <Text className="mt-1 text-xs text-slate-400">
          Desenvolvido para fins educativos
        </Text>
      </View>
    </ScrollView>
  );
}

function Feature({
  icon,
  title,
  description,
}: Readonly<{
  icon: keyof typeof Feather.glyphMap;
  title: string;
  description: string;
}>) {
  return (
    <View className="mt-5 flex-row items-start">
      <View className="size-10 items-center justify-center rounded-xl bg-blue-50">
        <Feather name={icon} size={19} color={colors.primary} />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-base font-bold text-slate-800">{title}</Text>

        <Text className="mt-1 text-sm leading-5 text-slate-500">
          {description}
        </Text>
      </View>
    </View>
  );
}

function ContentItem({
  icon,
  title,
  description,
}: Readonly<{
  icon: keyof typeof Feather.glyphMap;
  title: string;
  description: string;
}>) {
  return (
    <View className="flex-row items-center rounded-2xl bg-slate-50 p-4">
      <View className="size-11 items-center justify-center rounded-xl bg-blue-100">
        <Feather name={icon} size={21} color={colors.primary} />
      </View>

      <View className="ml-3 flex-1">
        <Text className="font-bold text-slate-800">{title}</Text>

        <Text className="mt-1 text-sm text-slate-500">{description}</Text>
      </View>
    </View>
  );
}

function ComunitPerson({ name, dec }: Readonly<{ name: string; dec: string }>) {
  return (
    <View>
      <Pressable className="flex-row items-center gap-2">
        <Feather
          name="user"
          size={18}
          color={colors.primary}
          className="p-2 bg-slate-200 rounded-full"
        />
        <Text className="text-lg font-bold text-gray-700">{name}</Text>
      </Pressable>
      <View className="pl-12">
        <Text className="text-lg text-slate-600 font-normal text-start">
          {dec}
        </Text>
      </View>
    </View>
  );
}
