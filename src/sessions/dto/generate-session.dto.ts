import { IsNotEmpty } from 'class-validator';

export class GenerateSessionDto {
  @IsNotEmpty()
  codeblock_id: number;

  @IsNotEmpty()
  student_id: number;
}
