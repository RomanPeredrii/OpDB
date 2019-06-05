const log = console.log;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const goTo = (props, page) => props.history.push(page);

export {log, headers, goTo}
        
