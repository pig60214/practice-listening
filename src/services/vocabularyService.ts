import ApiResponse from "../interfaces/apiResponse";
import IVocabulary from "../interfaces/vocabulary";
import VocabularyRepo from "../repositories/vocabularyRepo";

export default class VocabularyService {
  vocabularyRepo = new VocabularyRepo();
  async getByTranscriptionId(transcriptionId: number): Promise<IVocabulary[]> {
    const result = await this.vocabularyRepo.getByTranscriptionId(transcriptionId);
    return result;
  }
  async add(request: IVocabulary): Promise<number> {
    const result = await this.vocabularyRepo.add(request);
    return result;
  }
  async update(request: IVocabulary): Promise<number> {
    const result = await this.vocabularyRepo.update(request);
    return result;
  }
}