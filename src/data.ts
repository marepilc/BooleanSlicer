'use strict'

import powerbi from 'powerbi-visuals-api';
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;


export interface Data {
    table: string,
    column: string
}

export function transformData(options: VisualUpdateOptions): Data {
    let data = {
        table: '',
        column: ''
    }

    let query: string;
    let ix: number = -1;

    try {
        query = options.dataViews[0].categorical.categories[0].source.queryName;
        ix = query.indexOf('.');
        data.table = query.substring(0, ix);
        data.column = query.substring(ix + 1);
    } catch(error) {
        console.log(error);
    }
    return data;
}