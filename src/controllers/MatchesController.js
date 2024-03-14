import {HttpClient} from '.';

export class MatchesController {
  static async matchsList() {
    try {
      return await HttpClient.get(
        'matches?apikey=8426de27-730f-4033-b6a5-2c22864f2870&offset=0',
      );
    } catch (error) {
      throw error;
    }
  }
}
