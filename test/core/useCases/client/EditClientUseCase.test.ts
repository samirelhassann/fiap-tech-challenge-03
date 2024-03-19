import { beforeEach, describe, expect, it, vi } from "vitest";

import { AttributeConflictError } from "@/core/domain/base/errors/useCases/AttributeConflictError";
import { ResourceNotFoundError } from "@/core/domain/base/errors/useCases/ResourceNotFoundError";
import { UserUseCase } from "@/core/useCases/user/UserUseCase";
import { makeUser } from "@test/adapters/factories/MakeUser";
import { InMemoryUserRepository } from "@test/adapters/InMemoryUserRepository";

let inMemoryUsersRepository: InMemoryUserRepository;
let sut: UserUseCase;

describe("Given the Edit User Use Case", () => {
  const name = "updated name";
  const email = "updated email";

  beforeEach(() => {
    vi.clearAllMocks();

    inMemoryUsersRepository = new InMemoryUserRepository();

    sut = new UserUseCase(inMemoryUsersRepository);
  });

  it("should edit the user correctly", async () => {
    const createdUser = makeUser();

    inMemoryUsersRepository.items.push(createdUser);

    await sut.editUser({
      id: createdUser.id.toString(),
      name,
      email,
    });

    expect(inMemoryUsersRepository.items[0]).toEqual(
      expect.objectContaining({
        email,
        name,
      })
    );
  });

  it("should throw an error when the informed 'email' already exists", async () => {
    const createdUser = makeUser({});
    const createdUser2 = makeUser({
      email: "email@email.com",
    });

    inMemoryUsersRepository.items.push(createdUser);
    inMemoryUsersRepository.items.push(createdUser2);

    await expect(() =>
      sut.editUser({
        id: createdUser.id.toString(),
        name,
        email: "email@email.com",
      })
    ).rejects.toBeInstanceOf(AttributeConflictError);
  });

  it("should throw an error when user does not exist", async () => {
    const createdUser = makeUser({});

    inMemoryUsersRepository.items.push(createdUser);

    await expect(() =>
      sut.editUser({
        id: "123",
        name,
        email,
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
