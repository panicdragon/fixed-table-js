/*
 * Author: Daisuke Takayama
 */
/// <reference path='_all.ts' />

'use strict';
var e = eval, global: NodeJS.Global = e('this');

module FixedTables {
  export class FixedTable {
    private static _instance: FixedTable = null;

    private view: FixedTableView;
    private model: FixedTableModel;

    constructor(
      option?: any
      ) {
      if (FixedTable._instance) {
        if (option !== void 0) {
          FixedTable._instance.model = new FixedTables.FixedTableModel(option);
          FixedTable._instance.view = new FixedTables.FixedTableView(FixedTable._instance.model);
        }

        return FixedTable._instance;
      } else {
        this.model = new FixedTables.FixedTableModel(option);
        this.view = new FixedTables.FixedTableView(this.model);

        FixedTable._instance = this;
      }
    }

    /**
     * Public Function
     **/
    public chengeMode(bool: boolean): void {
      this.model.chengeMode(bool);
      this.view.resizeContainer();
    }
  }
}

if (typeof (module) !== 'undefined') {
  if (typeof (module).exports.FixedTable === 'undefined') {
    (module).exports.FixedTable = {};
  }
  (module).exports.FixedTable = FixedTables.FixedTable;
}

if (typeof (global) !== 'undefined') {
  if (typeof global['FixedTable'] === 'undefined') {
    global['FixedTable'] = {};
  }
  global['FixedTable'] = FixedTables.FixedTable;
}
