export type DictType = Record<string, string>;
export type LayoutPropsType = {
  children: React.ReactNode;
  params: { lang: string };
};
export type PageParamsType = { params: { lang: string; cabinSlug?: string } };

export type PageDictType = { dict: DictType };
