import { OptionsService } from './options.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
export declare class OptionsController {
    private readonly optionsService;
    constructor(optionsService: OptionsService);
    create(createOptionDto: CreateOptionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOptionDto: UpdateOptionDto): string;
    remove(id: string): string;
}
