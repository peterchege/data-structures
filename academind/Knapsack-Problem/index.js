function knapsack(items, cap) {
  const sackItems = { items: [], value: 0, weight: 0 };
  let remainingCapacity = cap;

  for (let item of items) {
    if (item.weight <= remainingCapacity) {
      sackItems.items.push(item);
      sackItems.value += item.value;
      sackItems.weight += item.weight;
      remainingCapacity -= item.weight;
    }
  }
  return sackItems;
}

const items = [
  { name: 'a', value: 3, weight: 3 },
  { name: 'b', value: 6, weight: 8 },
  { name: 'c', value: 10, weight: 3 },
];

const maxCap = 8;
const sack = knapsack(items, maxCap);

console.log(sack);
