// dbService.tsx

import * as SQLite from 'expo-sqlite';
import { WebSQLDatabase } from 'expo-sqlite';

type Lift = {
  id?: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  date: string;
};

class DBService {
  db: WebSQLDatabase;

  constructor(dbName: string) {
    this.db = SQLite.openDatabase(dbName);
  }

  executeQuery = (sql: string, params: any[] = []): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          sql,
          params,
          (_, result) => resolve(result),
          (_, err) => {
            reject(err);
            return false;
          }
        );
      });
    });
  };

  initializeDb = async (): Promise<void> => {
    await this.executeQuery(
      `CREATE TABLE IF NOT EXISTS lifts (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name TEXT NOT NULL,
        sets INTEGER NOT NULL,
        reps INTEGER NOT NULL,
        weight INTEGER NOT NULL,
        date TEXT NOT NULL
      );`
    );
  };

  addLift = async (lift: Lift): Promise<void> => {
    await this.executeQuery(
      `INSERT INTO lifts (name, sets, reps, weight, date)
       VALUES (?, ?, ?, ?, ?);`,
      [lift.name, lift.sets, lift.reps, lift.weight, lift.date]
    );
  };

  getLifts = async (): Promise<Lift[]> => {
    const results = await this.executeQuery(`SELECT * FROM lifts;`);
    let lifts: Lift[] = [];
    for (let i = 0; i < results.rows.length; i++) {
      lifts.push(results.rows.item(i));
    }
    return lifts;
  };

}

const dbService = new DBService('lifting.db');

export default dbService;

