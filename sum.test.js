const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=> {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ ?', ()=> {
  expect(sum(2,5)).toBe(7);
});

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy
test('6 + 5 = 11', ()=> {
	expect(sum(6,5)).toBe(11);
});


test('9 + 3 = 12', ()=> {
	expect(sum(9,3)).toBe(12);
});

test('10 + 5 = 15' , ()=> {
	expect(sum(10,5)).toBe(15);
});

