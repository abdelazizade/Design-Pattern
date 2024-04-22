const Iterator = function (this: any, items) {
  this.index = 0;
  this.items = items;
};

Iterator.prototype = {
  first: function () {
    this.reset();
    return this.next();
  },
  next: function () {
    return this.items[this.index++];
  },
  hasNext: function () {
    return this.index <= this.items.length;
  },
  reset: function () {
    this.index = 0;
  },
  each: function (callback) {
    for (var item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  },
};

function run() {
  const number = [1, 2, 3, 4, 5];
  const items = ["one", "two", "three", "four", "five"];

  const iter = new Iterator(number);
  const iterator = new Iterator(items);

  iter.each(function (item) {
    console.log(item);
  });
  iterator.each(function (items) {
    console.log(items);
  });
}

run();
