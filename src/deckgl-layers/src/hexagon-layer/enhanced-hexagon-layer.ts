// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import {HexagonLayer} from '@deck.gl/aggregation-layers';
import CPUAggregator, {AggregationType, getAggregatedData} from '../layer-utils/cpu-aggregator';

export const hexagonAggregation: AggregationType = {
  key: 'position',
  updateSteps: [
    {
      key: 'aggregate',
      triggers: {
        cellSize: {
          prop: 'radius'
        },
        position: {
          prop: 'getPosition',
          updateTrigger: 'getPosition'
        },
        aggregator: {
          prop: 'hexagonAggregator'
        }
      },
      updater: getAggregatedData
    }
  ]
};

export default class ScaleEnhancedHexagonLayer extends HexagonLayer<any> {
  initializeState() {
    const cpuAggregator = new CPUAggregator({
      aggregation: hexagonAggregation
    });

    this.state = {
      cpuAggregator,
      aggregatorState: cpuAggregator.state
    };
    const attributeManager = this.getAttributeManager();
    attributeManager.add({
      positions: {size: 3, accessor: 'getPosition'}
    });
  }
}

ScaleEnhancedHexagonLayer.layerName = 'ScaleEnhancedHexagonLayer';
