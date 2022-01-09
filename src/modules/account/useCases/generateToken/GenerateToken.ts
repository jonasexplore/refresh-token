type GenerateTokenDTO = {
  token: string;
};

class GenereateToken {
  async execute({ token }: GenerateTokenDTO) {}
}

export { GenereateToken };
