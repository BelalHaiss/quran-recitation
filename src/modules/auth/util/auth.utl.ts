const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Field = { email: string } | { username: string };
export function usernameOrEmailField(input: string): Field {
  if (emailRegex.test(input)) {
    return { email: input };
  } else {
    return { username: input };
  }
}
