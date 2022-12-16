function createData(token, price, volume,twentyFourh,graph) {
  return { token, price,volume, twentyFourh,graph };
}
const MarketData={
  columns:[
    { id: 'token', label: 'Token' },
    { id: 'price', label: 'Price'},
    {
      id: 'volume',
      label: 'volume',
    },
    {
      id: 'twentyFourh',
      label: '24h',
    },
    {
      id: 'graph',
      label: 'Graph',        
      align: 'right',
    }, 
  ],


  rows:[
    createData('BTC', '$475.22M','$779.58M', '+5.3', 'image'),
    createData('BTC', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC ', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC ', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC ', '$475.22M','$779.58M', '+5.3','image'),
    createData('BTC', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC', '$475.22M', '$779.58M', '+5.3','image'),
    createData('BTC', '$475.22M', '$779.58M', '+5.3','image'),
  ]

}   

export default MarketData


    


 
  

