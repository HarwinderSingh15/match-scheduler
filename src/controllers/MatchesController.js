import {getStorage, setStorage} from '@/storage';
import {HttpClient} from './HttpClient';
import {deserializeStorage, serializeStorage} from '@/utils/globalMethods';

export class MatchesController {
  static async matchsList() {
    try {
      return await HttpClient.get('');
    } catch (error) {
      throw error;
    }
  }

  static async getAllMatchSchedule() {
    try {
      const resp = await getStorage();
      const deserializeMatchs = deserializeStorage(
        resp,
        'matches', // reducer name
      );
      return deserializeMatchs?.allSchedules || [];
    } catch (error) {
      throw error;
    }
  }

  static async addMatchSchedule(body) {
    try {
      const resp = await getStorage();
      const deserializeMatchs = deserializeStorage(
        resp,
        'matches', // reducer name
      );
      const newSchedules = [...(deserializeMatchs?.allSchedules || []), body];
      const parsedStorage = JSON.parse(resp);
      parsedStorage['matches'] = serializeStorage({
        ...deserializeMatchs,
        allSchedules: newSchedules,
      });
      setStorage(serializeStorage(parsedStorage));
      return body;
    } catch (error) {
      throw error;
    }
  }

  static async viewMatchDetailsById(id) {
    try {
      const resp = await getStorage();
      const deserializeMatchSchedules = deserializeStorage(
        resp,
        'matches', // reducer name
      )?.allSchedules;
      return deserializeMatchSchedules?.find(el => el.id == id);
    } catch (error) {
      throw error;
    }
  }

  static async editMatchScheduleById({id, ...rest}) {
    try {
      const resp = await getStorage();
      const deserializeMatchs = deserializeStorage(
        resp,
        'matches', // reducer name
      );
      const scheduleFound = deserializeMatchs?.allSchedules?.find(
        el => el.id == id,
      );
      const updateSchedule = {...scheduleFound, ...rest};
      const parsedStorage = JSON.parse(resp);
      parsedStorage['matches'] = serializeStorage({
        ...deserializeMatchs,
        allSchedules: [
          ...deserializeMatchs?.allSchedules?.filter(el => el.id != id),
          updateSchedule,
        ],
      });
      setStorage(serializeStorage(parsedStorage));
    } catch (error) {
      throw error;
    }
  }

  static async deleteScheduleById(id) {
    try {
      const resp = await getStorage();
      const deserializeMatchs = deserializeStorage(
        resp,
        'matches', // reducer name
      );
      const removedSchedule = deserializeMatchs?.allSchedules?.filter(
        el => el.id != id,
      );
      const parsedStorage = JSON.parse(resp);
      parsedStorage['matches'] = serializeStorage({
        ...deserializeMatchs,
        allSchedules: removedSchedule,
      });
      setStorage(serializeStorage(parsedStorage));
    } catch (error) {
      throw error;
    }
  }
}
