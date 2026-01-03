import { AttemptsService } from './attempts.service';
import { CreateAttemptDto } from './dto/create-attempt.dto';
import { UpdateAttemptDto } from './dto/update-attempt.dto';
export declare class AttemptsController {
    private readonly attemptsService;
    constructor(attemptsService: AttemptsService);
    create(createAttemptDto: CreateAttemptDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAttemptDto: UpdateAttemptDto): string;
    remove(id: string): string;
}
