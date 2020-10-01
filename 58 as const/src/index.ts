function layout(settings: {
  align: 'left' | 'center' | 'right',
  padding: number,
}) {
  console.log('Performing layout:', settings);
}

const example = {
  align: 'left',
  padding: 0,
};

layout(example);