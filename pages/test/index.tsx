import * as React from 'react';
import { Row, Col, Layout, ConfigProvider } from 'antd';

const TestView = (data?: []) => {
  return <div></div>;
};

export default TestView;

// const EditableBase = (WrappedComponent: any) => {
//   // let WrappedComponent = ...WrappedComponent;

//   let { data } = WrappedComponent;
//   return class EditorBase extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: this.props.value,
//         mode: this.props.value ? 'VIEW' : 'EMPTY',
//         hasChanged: false,
//       };
//     }
//     startEditing = () => {
//       this.setState({ mode: 'EDIT' });
//     };
//     saveValue = (value) => {
//       this.setState({ mode: 'SAVING', value: value });
//     };
//     render() {
//       return <div>data</div>
//       // return (
//       //   <WrappedComponent
//       //     {...this.props}
//       //     {...this.state}
//       //     startEditing={this.startEditing}
//       //     saveValue={this.saveValue}
//       //     stateStyles={STATE_STYLES}
//       //   />
//       );
//     }
//   };
// };
// const STATE_STYLES = {
//   state_button_cancel: {
//     marginLeft: 10,
//   },
//   font: {
//     fontFamily: 'Open Sans, sans-serif',
//     fontSize: '1.1em',
//   },
// };
// export default EditableBase;
