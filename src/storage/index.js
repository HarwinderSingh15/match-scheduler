import {PRESIST_REDUCER_KEY} from '@/constants/common';
import {MMKVLoader} from 'react-native-mmkv-storage';
import {KEY_PREFIX} from 'redux-persist';

export const storage = new MMKVLoader().withEncryption().initialize();

export const getStorage = async () =>
  await storage.getItem(KEY_PREFIX + PRESIST_REDUCER_KEY);
export const setStorage = async item =>
  await storage.setItem(KEY_PREFIX + PRESIST_REDUCER_KEY, item);
