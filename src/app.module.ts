import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppsModule } from './apps/apps.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { MetadataModule } from './metadata/metadata.module';
import { UsersModule } from './users/users.module';
import { AttemptsModule } from './attempts/attempts.module';

@Module({
  imports: [AppsModule, QuizzesModule, QuestionsModule, OptionsModule, CategoriesModule, TagsModule, MetadataModule, UsersModule, AttemptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
