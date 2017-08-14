import React from 'react';
import PDFGenerator from 'jspdf'

class PDFMaker extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let doc = new PDFGenerator('p', 'pt', 'letter')
    doc.setFontSize(22);
    doc.text(20, 50, 'TESTTEST');
    doc.save("test.pdf");
  }

  render() {
    return(
      <div>
      <input
        type='button'
        onClick={this.handleClick}
        value='make pdf'
      />
      </div>

    )
  }
}

export default PDFMaker;
