const path = require('path'),
  fs = require('fs'),
  parent = module.parent;

function getFullFileName(file) {
  const directory = path.dirname(parent.filename),
    absolutePath = path.join(directory, file);

  return absolutePath;
}

module.exports = class {
  /**
   * Hook all modules under this object. Watch module files and automatically update you modules.
   * @param {Array[0] = true} moduleNames[0] - Boolean. If true, watch module file and update when file changed.
   * @param {...Array} moduleNames - Array of module name。
   */
  constructor(...parameters) {
    const hook = (moduleNames) => {
      moduleNames.forEach((moduleName, i, a) => {
        if (i === 0 && a[0] === true)
          return;
        if (a[0] !== false) {
          if (moduleName instanceof Array) {
            hook(moduleName);
            return;
          }
          const absolutePath = getFullFileName(moduleName),
            requiredName = require.resolve(absolutePath),
            name = moduleName.replace(/\.\//, '');
          this[name] = require(requiredName);

          fs.watch(absolutePath + '.js', () => {
            delete require.cache[requiredName];
            this[name] = require(requiredName);
            console.log('Update module:', name);
          });
        }
      });
    };
    hook(parameters);
  }
}
