import NodeCache from 'node-cache';

const memoryCache: NodeCache = new NodeCache({
  stdTTL: 300,
  checkperiod: 10,
  maxKeys: 200,
});

export default memoryCache;
