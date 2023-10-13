interface TypeWIthDate {
  updated_at: Date;
  created_at: Date;
}

export type OmitDateFields<
  T extends TypeWIthDate,
  OtherFields extends keyof T,
> = Omit<T, 'created_at' | 'updated_at' | OtherFields>;
