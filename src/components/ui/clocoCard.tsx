import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  id: string;
  title: string | number;
  desc?: string;
  subDesc: string;
  onClick?: () => void;
};

export function BlocoCard({
  id,
  subDesc,
  title,
  desc,
  onClick,
}: Readonly<Props>) {
  return (
    <Pressable
      onPress={() => onClick?.()}
      className="w-[48%] rounded-2xl bg-white p-4 shadow-sm justify-between"
    >
      <Text numberOfLines={3} className="text-2xl font-bold text-blue-600">
        {title}
      </Text>
      {!!desc && <Text className="mt-4 font-bold text-slate-900">{desc}</Text>}

      <Text className="mt-2 text-sm text-slate-400">{subDesc}</Text>
    </Pressable>
  );
}
