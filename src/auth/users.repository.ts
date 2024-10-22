import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    // This is a custom method that we can use to find a user by username
}   