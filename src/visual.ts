/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
"use strict";

import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import DataView = powerbi.DataView;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;

import { VisualSettings } from "./settings";
import { transformData, Data } from './data';
import { drawBtn, drawKnob } from "./icons";
import * as models from 'powerbi-models';

export class Visual implements IVisual {
    private target: HTMLElement;
    private data: Data;
    private status: {value: 'all' | 'true' | 'false'};
    private host: IVisualHost;
    private opt: VisualSettings;
    private container: HTMLElement;
    private lLabel: HTMLElement;
    private lBtn: HTMLElement;
    private knob: HTMLElement;
    private rBtn: HTMLElement;
    private rLabel: HTMLElement;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
        this.host = options.host;
        this.status = {value: 'all'};
        if (document) {
            this.container = document.createElement('div');
            this.container.setAttribute('id', 'container');
            this.lLabel = document.createElement('div');
            this.lLabel.setAttribute('class', 'label');
            this.lBtn = document.createElement('div');
            this.lBtn.setAttribute('class', 'svg-container');
            this.knob = document.createElement('div');
            this.knob.setAttribute('class', 'svg-container');
            this.rBtn = document.createElement('div');
            this.rBtn.setAttribute('class', 'svg-container');
            this.rLabel = document.createElement('div');
            this.rLabel.setAttribute('class', 'label');
            this.container.appendChild(this.lLabel);
            this.container.appendChild(this.lBtn);
            this.container.appendChild(this.knob);
            this.container.appendChild(this.rBtn);
            this.container.appendChild(this.rLabel);
            this.target.appendChild(this.container);
        }
    }

    public update(options: VisualUpdateOptions) {
        this.opt = Visual.parseSettings(options && options.dataViews && options.dataViews[0]);

        this.data = transformData(options);
        let squareSize = Math.min(options.viewport.width, options.viewport.height);

        let opt = this.opt;
        let host = this.host;
        let status = this.status;
        let lLabel = this.lLabel;
        let lBtn = this.lBtn;
        let knob = this.knob;
        let rBtn = this.rBtn;
        let rLabel = this.rLabel;

        const basicFilter: models.IBasicFilter = {
            "$schema": "http://powerbi.com/product/schema#basic",
            filterType: 1,
            target: {
              table: this.data.table,
              column: this.data.column
            },
            operator: "In",
            values: [true, false]
        };

        this.lLabel.innerHTML = this.opt.options.lLabel;
        this.lLabel.style.fontSize = this.opt.options.fontSize + 'px';
        this.lLabel.style.fontFamily = this.opt.options.fontFamily;
        this.lLabel.style.color = this.opt.options.defaultColor;
        this.rLabel.innerHTML = this.opt.options.rLabel;
        this.rLabel.style.fontSize = this.opt.options.fontSize + 'px';
        this.rLabel.style.fontFamily = this.opt.options.fontFamily;
        this.rLabel.style.color = this.opt.options.defaultColor;

        this.lLabel.onclick = function(e: MouseEvent) {
            status.value = 'false';
            basicFilter.values = [false];
            host.applyJsonFilter(basicFilter, 'general', 'filter', powerbi.FilterAction.merge);
            styleSVG();
        }
        this.lBtn.onclick = function(e: MouseEvent) {
            status.value = 'false';
            basicFilter.values = [false];
            host.applyJsonFilter(basicFilter, 'general', 'filter', powerbi.FilterAction.merge);
            styleSVG();
        }
        this.knob.onclick = function(e: MouseEvent) {
            status.value = 'all';
            basicFilter.values = [true, false];
            host.applyJsonFilter(basicFilter, 'general', 'filter', powerbi.FilterAction.remove);
            styleSVG();
        }
        this.rBtn.onclick = function(e: MouseEvent) {
            status.value = 'true';
            basicFilter.values = [true];
            host.applyJsonFilter(basicFilter, 'general', 'filter', powerbi.FilterAction.merge);
            styleSVG();
        }
        this.rLabel.onclick = function(e: MouseEvent) {
            status.value = 'true';
            basicFilter.values = [true];
            host.applyJsonFilter(basicFilter, 'general', 'filter', powerbi.FilterAction.merge);
            styleSVG();
        }

        styleSVG();
        function styleSVG() {
            if (status.value == 'false') {
                lBtn.innerHTML = drawBtn(squareSize, opt.options.selectColor, 'left');
                if (opt.options.changeLabelColor) {
                    lLabel.style.color = opt.options.selectColor;
                }
            } else {
                lBtn.innerHTML = drawBtn(squareSize, opt.options.defaultColor, 'left');
                lLabel.style.color = opt.options.defaultColor;
            }
            if (status.value == 'all') {
                knob.innerHTML = drawKnob(squareSize, opt.options.defaultColor, opt.options.selectColor, 'top');
            } else if (status.value == 'false') {
                knob.innerHTML = drawKnob(squareSize, opt.options.defaultColor, opt.options.selectColor, 'left');
            } else {
                knob.innerHTML = drawKnob(squareSize, opt.options.defaultColor, opt.options.selectColor, 'right');
            }
            if (status.value == 'true') {
                rBtn.innerHTML = drawBtn(squareSize, opt.options.selectColor, 'right');
                if (opt.options.changeLabelColor) {
                    rLabel.style.color = opt.options.selectColor;
                }
            } else {
                rBtn.innerHTML = drawBtn(squareSize, opt.options.defaultColor, 'right');
                rLabel.style.color = opt.options.defaultColor;
            }
        }    
    }

    private static parseSettings(dataView: DataView): VisualSettings {
        return <VisualSettings>VisualSettings.parse(dataView);
    }

    /**
     * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
     * objects and properties you want to expose to the users in the property pane.
     *
     */
    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        return VisualSettings.enumerateObjectInstances(this.opt || VisualSettings.getDefault(), options);
    }
}