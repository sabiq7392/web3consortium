const debug = props => (
  props.debug ? 'border: 1px solid red;' : ''
);
export default debug;

// border-color: ${props => props.debug.color}!important;
// border-width: ${props => props.debug.width}!important;
// border-style: ${props => props.debug.style}!important;