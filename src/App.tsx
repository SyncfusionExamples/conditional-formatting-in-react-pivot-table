import React from 'react';
import { PivotViewComponent, ConditionalFormatting, Inject, Toolbar, PivotView } from '@syncfusion/ej2-react-pivotview';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import {pivotData} from './data';
import './App.css';

function App() {
  let pivotObj: PivotView | null;
  const applyFormat=()=>{
    pivotObj?.conditionalFormattingModule.showConditionalFormattingDialog();
  }
 return (
    <div id="wrapper">
      <ButtonComponent id='btn' cssClass='e-primary' onClick={applyFormat}>Apply Format</ButtonComponent>
      <PivotViewComponent ref={pv=>pivotObj=pv}
      allowConditionalFormatting={true}
      showToolbar={true}
      toolbar={["ConditionalFormatting"]}
        dataSourceSettings={{
          dataSource: pivotData,
          rows: [{ name: 'Country' }, {name: 'Products'}],
          columns: [{ name: 'Year' }],
          values: [
            { name: 'Sold', caption: 'Units Sold' }, 
            { name: 'Amount', caption: 'Sold Amount' }
          ],
          conditionalFormatSettings: [{
            measure: "Amount",
            conditions: "Between",
            value1: 100000,
            value2: 800000,
            style: {
              backgroundColor: '#80cbc4',
              color: 'black',
              fontFamily: 'Tahoma',
              fontSize: '12px'
            },
          },
        {
          conditions: 'LessThan',
          value1: 400000,
          style: {
            backgroundColor: '#00FFFF',
            color: 'black',
            fontFamily: 'Tahoma',
            fontSize: '12px'
          },
        }]
        }}>
          <Inject services={[ConditionalFormatting, Toolbar]}></Inject>
      </PivotViewComponent>
    </div>
  );
}

export default App;
