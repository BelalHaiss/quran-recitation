interface TypeWIthDate {
  updated_at: Date;
  created_at: Date;
}

export type OmitDateFields<
  T extends TypeWIthDate,
  OtherFields extends keyof T,
> = Omit<T, 'created_at' | 'updated_at' | OtherFields>;

type OmitSameType<T, K extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, K>
>;
