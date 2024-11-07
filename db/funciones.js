'use strict';

import pool from './pool.js';

export async function ejecutarConsulta(query, params = []) {
    const [results] = await pool.execute(query, params);
    return results;
}