import { MetadataService } from './metadata.service';
import { CreateMetadatumDto } from './dto/create-metadatum.dto';
import { UpdateMetadatumDto } from './dto/update-metadatum.dto';
export declare class MetadataController {
    private readonly metadataService;
    constructor(metadataService: MetadataService);
    create(createMetadatumDto: CreateMetadatumDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMetadatumDto: UpdateMetadatumDto): string;
    remove(id: string): string;
}
