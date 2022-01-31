import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function IconCar(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.542}
      height={13.157}
      {...props}
      tabIndex="-1"
    >
      <Path
        tabIndex="-1"
        data-name="icon/shape"
        d="M18.107 3.837h-2.168l-.6-1.425A4.04 4.04 0 0011.571 0h-4.6a4.042 4.042 0 00-3.765 2.412L2.6 3.837H.435a.417.417 0 00-.422.511l.217.822a.431.431 0 00.422.311h.727a2.131 2.131 0 00-.8 1.645v1.645a2.11 2.11 0 00.579 1.437v1.852a1.129 1.129 0 001.159 1.1h1.16a1.129 1.129 0 001.159-1.1v-1.1h9.271v1.1a1.129 1.129 0 001.159 1.1h1.159a1.129 1.129 0 001.159-1.1v-1.852a2.109 2.109 0 00.579-1.437V7.127a2.132 2.132 0 00-.8-1.645h.727a.431.431 0 00.422-.311l.217-.822a.417.417 0 00-.422-.511zm-12.75-.611a1.741 1.741 0 011.615-1.033h4.6a1.741 1.741 0 011.614 1.034l.722 1.707H4.636l.722-1.707zm-1.88 5.538a1.095 1.095 0 110-2.186 2.173 2.173 0 011.738 1.639c0 .657-1.043.547-1.738.547zm11.589 0c-.7 0-1.738.109-1.738-.546a2.173 2.173 0 011.738-1.639 1.095 1.095 0 110 2.186z"
        fill="#fff"
      />
    </Svg>
  );
}
