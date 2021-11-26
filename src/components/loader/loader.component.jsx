const Loader = ({
  height = 'h-8',
  width = 'h-8',
  primaryColor = '#FB7185',
  secondaryColor = '#FDA4AF',
  backgroundColor = 'transparent',
}) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        style={{
          margin: 'auto',
          background: `${backgroundColor}`,
          display: 'block',
          shapeRendering: 'auto',
        }}
        className={`${width} ${height}`}
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <circle cx='30' cy='50' fill={primaryColor} r='20'>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='1s'
            keyTimes='0;0.5;1'
            values='30;70;30'
            begin='-0.5s'
          ></animate>
        </circle>
        <circle cx='70' cy='50' fill={secondaryColor} r='20'>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='1s'
            keyTimes='0;0.5;1'
            values='30;70;30'
            begin='0s'
          ></animate>
        </circle>
        <circle cx='30' cy='50' fill={primaryColor} r='20'>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='1s'
            keyTimes='0;0.5;1'
            values='30;70;30'
            begin='-0.5s'
          ></animate>
          <animate
            attributeName='fill-opacity'
            values='0;0;1;1'
            calcMode='discrete'
            keyTimes='0;0.499;0.5;1'
            dur='1s'
            repeatCount='indefinite'
          ></animate>
        </circle>
      </svg>
    </>
  );
};

export default Loader;
