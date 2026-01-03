import { CreateMetadatumDto } from './dto/create-metadatum.dto';
import { UpdateMetadatumDto } from './dto/update-metadatum.dto';
export declare class MetadataService {
    create(createMetadatumDto: CreateMetadatumDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMetadatumDto: UpdateMetadatumDto): string;
    remove(id: number): string;
}
