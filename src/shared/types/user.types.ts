export type Jwt_Payload = {
  sub: string;
  userType: Role;
};

export enum Role {
  Student = 'student',
  Manger = 'manager',
  She5 = 'she5',
}
