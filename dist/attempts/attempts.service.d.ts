import { CreateAttemptDto } from './dto/create-attempt.dto';
import { UpdateAttemptDto } from './dto/update-attempt.dto';
export declare class AttemptsService {
    create(createAttemptDto: CreateAttemptDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAttemptDto: UpdateAttemptDto): string;
    remove(id: number): string;
}
