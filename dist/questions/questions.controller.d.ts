import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class QuestionsController {
    private readonly questionsService;
    constructor(questionsService: QuestionsService);
    create(createQuestionDto: CreateQuestionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateQuestionDto: UpdateQuestionDto): string;
    remove(id: string): string;
}
