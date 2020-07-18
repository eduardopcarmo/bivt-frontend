import React from 'react';
import {Svg, Path, G, Rect, Circle} from 'react-native-svg';

const SettingsIcon = (props) => {
  if (props.disabled) {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33">
        <G
          id="Group_1520"
          data-name="Group 1520"
          transform="translate(-381 -5006)">
          <Rect
            id="Rectangle_212"
            data-name="Rectangle 212"
            width="33"
            height="33"
            transform="translate(381 5006)"
            fill="none"
            opacity="0.315"
          />
          <G
            id="Union_8"
            data-name="Union 8"
            transform="translate(2516.025 1872)"
            fill="none">
            <Path
              d="M-2119,3167a3,3,0,0,1-3-3v-.451a13.416,13.416,0,0,1-2.944-1.169l-.3.3a3,3,0,0,1-4.242,0l-1.415-1.414a3,3,0,0,1,0-4.243l.364-.364a13.4,13.4,0,0,1-1.027-2.662H-2132a3,3,0,0,1-3-3v-1a3,3,0,0,1,3-3h.433a13.4,13.4,0,0,1,1.253-3.083l-.589-.589a3,3,0,0,1,0-4.243l1.415-1.415a3,3,0,0,1,4.242,0l.708.708.021.021a13.4,13.4,0,0,1,2.519-.948V3137a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v.465a13.381,13.381,0,0,1,2.2.807l.6-.6a3,3,0,0,1,4.244,0l1.414,1.415a3,3,0,0,1,0,4.243l-.339.339a13.4,13.4,0,0,1,1.4,3.333h.458a3,3,0,0,1,3,3v1a3,3,0,0,1-3,3h-.458a13.417,13.417,0,0,1-1.163,2.919l.106.106a3,3,0,0,1,0,4.242l-1.414,1.415a3,3,0,0,1-4.243,0l-.167-.167a13.4,13.4,0,0,1-2.636,1.02V3164a3,3,0,0,1-3,3Z"
              stroke="none"
            />
            <Path
              d="M -2117.999755859375 3165.000244140625 C -2117.448486328125 3165.000244140625 -2117 3164.55126953125 -2117 3163.99951171875 L -2117 3163.53466796875 L -2117 3162.002685546875 L -2115.520751953125 3161.603759765625 C -2114.74755859375 3161.39501953125 -2113.992919921875 3161.10302734375 -2113.27783203125 3160.735595703125 L -2111.980712890625 3160.0693359375 L -2110.949462890625 3161.1005859375 L -2110.7822265625 3161.267578125 C -2110.52734375 3161.522705078125 -2110.229736328125 3161.560791015625 -2110.0751953125 3161.560791015625 C -2109.920654296875 3161.560791015625 -2109.623046875 3161.522705078125 -2109.36865234375 3161.26806640625 L -2107.95361328125 3159.852294921875 C -2107.69921875 3159.597900390625 -2107.6611328125 3159.30078125 -2107.6611328125 3159.146240234375 C -2107.6611328125 3158.99169921875 -2107.69921875 3158.694580078125 -2107.95263671875 3158.441162109375 L -2108.05908203125 3158.3349609375 L -2109.116455078125 3157.280029296875 L -2108.405029296875 3155.966552734375 C -2107.979248046875 3155.180419921875 -2107.646240234375 3154.3447265625 -2107.415283203125 3153.482421875 L -2107.018310546875 3151.999755859375 L -2105.4833984375 3151.999755859375 L -2105.025390625 3151.999755859375 C -2104.4736328125 3151.999755859375 -2104.024658203125 3151.55126953125 -2104.024658203125 3151 L -2104.024658203125 3150 C -2104.024658203125 3149.448974609375 -2104.4736328125 3149.00048828125 -2105.025390625 3149.00048828125 L -2105.4833984375 3149.00048828125 L -2107.018798828125 3149.00048828125 L -2107.41552734375 3147.51708984375 C -2107.680908203125 3146.5244140625 -2108.08056640625 3145.570556640625 -2108.603271484375 3144.681640625 L -2109.3876953125 3143.34765625 L -2108.293701171875 3142.25341796875 L -2107.954345703125 3141.9140625 C -2107.564453125 3141.524169921875 -2107.564453125 3140.889892578125 -2107.954833984375 3140.49951171875 L -2109.367431640625 3139.085693359375 C -2109.62255859375 3138.830810546875 -2109.920654296875 3138.792724609375 -2110.07568359375 3138.792724609375 C -2110.230712890625 3138.792724609375 -2110.52880859375 3138.830810546875 -2110.7822265625 3139.083984375 L -2111.382080078125 3139.684814453125 L -2112.375 3140.679443359375 L -2113.647216796875 3140.082275390625 C -2114.24951171875 3139.799560546875 -2114.8798828125 3139.568359375 -2115.520751953125 3139.3955078125 L -2117 3138.99658203125 L -2117 3137.464599609375 L -2117 3136.99951171875 C -2117 3136.4482421875 -2117.448486328125 3135.999755859375 -2117.999755859375 3135.999755859375 L -2118.999755859375 3135.999755859375 C -2119.551513671875 3135.999755859375 -2120.000244140625 3136.4482421875 -2120.000244140625 3136.99951171875 L -2120.000244140625 3137.451171875 L -2120.000244140625 3138.989501953125 L -2121.487060546875 3139.38427734375 C -2122.223876953125 3139.579833984375 -2122.94482421875 3139.851318359375 -2123.6298828125 3140.191162109375 L -2124.9169921875 3140.829833984375 L -2125.93310546875 3139.81396484375 L -2125.954345703125 3139.792724609375 L -2126.661865234375 3139.085205078125 C -2126.916259765625 3138.830810546875 -2127.213623046875 3138.792724609375 -2127.368408203125 3138.792724609375 C -2127.523193359375 3138.792724609375 -2127.820556640625 3138.830810546875 -2128.074951171875 3139.085205078125 L -2129.48974609375 3140.499755859375 C -2129.879638671875 3140.8896484375 -2129.879638671875 3141.5244140625 -2129.490234375 3141.913818359375 L -2128.90087890625 3142.5029296875 L -2127.830078125 3143.5732421875 L -2128.5693359375 3144.894287109375 C -2129.0322265625 3145.720947265625 -2129.390869140625 3146.603759765625 -2129.63525390625 3147.517578125 L -2130.0322265625 3149.00048828125 L -2131.5673828125 3149.00048828125 L -2132.000244140625 3149.00048828125 C -2132.55126953125 3149.00048828125 -2132.999755859375 3149.448974609375 -2132.999755859375 3150 L -2132.999755859375 3151 C -2132.999755859375 3151.55126953125 -2132.55126953125 3151.999755859375 -2132.000244140625 3151.999755859375 L -2131.567138671875 3151.999755859375 L -2130.031982421875 3151.999755859375 L -2129.635009765625 3153.48291015625 C -2129.426025390625 3154.2646484375 -2129.132080078125 3155.0263671875 -2128.761474609375 3155.747314453125 L -2128.0947265625 3157.04443359375 L -2129.1259765625 3158.075927734375 L -2129.490234375 3158.43994140625 C -2129.744873046875 3158.6943359375 -2129.78271484375 3158.99169921875 -2129.78271484375 3159.146240234375 C -2129.78271484375 3159.30126953125 -2129.74462890625 3159.598876953125 -2129.490234375 3159.853271484375 L -2128.074462890625 3161.268310546875 C -2127.820068359375 3161.522705078125 -2127.52294921875 3161.560791015625 -2127.368408203125 3161.560791015625 C -2127.2138671875 3161.560791015625 -2126.916748046875 3161.522705078125 -2126.6611328125 3161.26708984375 L -2126.35791015625 3160.964111328125 L -2125.30322265625 3159.91015625 L -2123.9921875 3160.6201171875 C -2123.199462890625 3161.04931640625 -2122.3564453125 3161.384033203125 -2121.48681640625 3161.615234375 L -2120.000244140625 3162.010009765625 L -2120.000244140625 3163.548095703125 L -2120.000244140625 3163.99951171875 C -2120.000244140625 3164.55126953125 -2119.551513671875 3165.000244140625 -2118.999755859375 3165.000244140625 L -2117.999755859375 3165.000244140625 M -2117.999755859375 3167.000244140625 L -2118.999755859375 3167.000244140625 C -2120.656494140625 3167.000244140625 -2122.000244140625 3165.656494140625 -2122.000244140625 3163.99951171875 L -2122.000244140625 3163.548095703125 C -2123.035888671875 3163.27294921875 -2124.022216796875 3162.878173828125 -2124.9443359375 3162.37890625 L -2125.24755859375 3162.681884765625 C -2125.8330078125 3163.267822265625 -2126.6005859375 3163.560791015625 -2127.368408203125 3163.560791015625 C -2128.135986328125 3163.560791015625 -2128.90380859375 3163.267822265625 -2129.4892578125 3162.681884765625 L -2130.904052734375 3161.26806640625 C -2132.07568359375 3160.09619140625 -2132.07568359375 3158.1962890625 -2130.904052734375 3157.025390625 L -2130.540283203125 3156.66162109375 C -2130.971923828125 3155.82177734375 -2131.318115234375 3154.930419921875 -2131.567138671875 3153.999755859375 L -2132.000244140625 3153.999755859375 C -2133.656982421875 3153.999755859375 -2134.999755859375 3152.656982421875 -2134.999755859375 3151 L -2134.999755859375 3150 C -2134.999755859375 3148.34326171875 -2133.656982421875 3147.00048828125 -2132.000244140625 3147.00048828125 L -2131.5673828125 3147.00048828125 C -2131.276123046875 3145.912109375 -2130.852783203125 3144.87890625 -2130.314697265625 3143.91748046875 L -2130.904052734375 3143.328369140625 C -2132.07568359375 3142.156494140625 -2132.07568359375 3140.257568359375 -2130.904052734375 3139.085693359375 L -2129.4892578125 3137.6708984375 C -2128.90380859375 3137.08544921875 -2128.135986328125 3136.792724609375 -2127.368408203125 3136.792724609375 C -2126.6005859375 3136.792724609375 -2125.8330078125 3137.08544921875 -2125.24755859375 3137.6708984375 L -2124.5400390625 3138.37841796875 C -2124.532958984375 3138.385498046875 -2124.52587890625 3138.392578125 -2124.518798828125 3138.399658203125 C -2123.720703125 3138.003662109375 -2122.87841796875 3137.684326171875 -2122.000244140625 3137.451171875 L -2122.000244140625 3136.99951171875 C -2122.000244140625 3135.343505859375 -2120.656494140625 3133.999755859375 -2118.999755859375 3133.999755859375 L -2117.999755859375 3133.999755859375 C -2116.3427734375 3133.999755859375 -2115 3135.343505859375 -2115 3136.99951171875 L -2115 3137.464599609375 C -2114.23681640625 3137.67041015625 -2113.50048828125 3137.941650390625 -2112.79736328125 3138.271728515625 L -2112.197509765625 3137.6708984375 C -2111.611572265625 3137.08544921875 -2110.84375 3136.792724609375 -2110.07568359375 3136.792724609375 C -2109.307861328125 3136.792724609375 -2108.539794921875 3137.08544921875 -2107.953857421875 3137.6708984375 L -2106.5400390625 3139.085693359375 C -2105.3681640625 3140.257568359375 -2105.3681640625 3142.156494140625 -2106.5400390625 3143.328369140625 L -2106.87939453125 3143.667724609375 C -2106.27294921875 3144.698974609375 -2105.7998046875 3145.8173828125 -2105.4833984375 3147.00048828125 L -2105.025390625 3147.00048828125 C -2103.368408203125 3147.00048828125 -2102.024658203125 3148.34326171875 -2102.024658203125 3150 L -2102.024658203125 3151 C -2102.024658203125 3152.656982421875 -2103.368408203125 3153.999755859375 -2105.025390625 3153.999755859375 L -2105.4833984375 3153.999755859375 C -2105.75830078125 3155.026123046875 -2106.151123046875 3156.004638671875 -2106.646484375 3156.919189453125 L -2106.5400390625 3157.025390625 C -2105.3681640625 3158.1962890625 -2105.3681640625 3160.09619140625 -2106.5400390625 3161.26708984375 L -2107.953857421875 3162.681884765625 C -2108.539794921875 3163.267822265625 -2109.3076171875 3163.560791015625 -2110.0751953125 3163.560791015625 C -2110.843017578125 3163.560791015625 -2111.610595703125 3163.267822265625 -2112.196533203125 3162.681884765625 L -2112.36376953125 3162.5146484375 C -2113.1962890625 3162.9423828125 -2114.078369140625 3163.2861328125 -2115 3163.53466796875 L -2115 3163.99951171875 C -2115 3165.656494140625 -2116.3427734375 3167.000244140625 -2117.999755859375 3167.000244140625 Z"
              stroke="none"
              fill="#848484"
            />
          </G>
          <G
            id="Ellipse_36"
            data-name="Ellipse 36"
            transform="translate(390 5015)"
            fill="none"
            stroke="#848484"
            stroke-width="2">
            <Circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
            <Circle cx="7.5" cy="7.5" r="6.5" fill="none" />
          </G>
        </G>
      </Svg>
    );
  } else {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33">
        <G
          id="Group_1661"
          data-name="Group 1661"
          transform="translate(-381 -5006)">
          <Rect
            id="Rectangle_212"
            data-name="Rectangle 212"
            width="33"
            height="33"
            transform="translate(381 5006)"
            fill="none"
            opacity="0.315"
          />
          <G
            id="Union_8"
            data-name="Union 8"
            transform="translate(2516.025 1872)"
            fill="none">
            <Path
              d="M-2119,3167a3,3,0,0,1-3-3v-.451a13.416,13.416,0,0,1-2.944-1.169l-.3.3a3,3,0,0,1-4.242,0l-1.415-1.414a3,3,0,0,1,0-4.243l.364-.364a13.4,13.4,0,0,1-1.027-2.662H-2132a3,3,0,0,1-3-3v-1a3,3,0,0,1,3-3h.433a13.4,13.4,0,0,1,1.253-3.083l-.589-.589a3,3,0,0,1,0-4.243l1.415-1.415a3,3,0,0,1,4.242,0l.708.708.021.021a13.4,13.4,0,0,1,2.519-.948V3137a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v.465a13.381,13.381,0,0,1,2.2.807l.6-.6a3,3,0,0,1,4.244,0l1.414,1.415a3,3,0,0,1,0,4.243l-.339.339a13.4,13.4,0,0,1,1.4,3.333h.458a3,3,0,0,1,3,3v1a3,3,0,0,1-3,3h-.458a13.417,13.417,0,0,1-1.163,2.919l.106.106a3,3,0,0,1,0,4.242l-1.414,1.415a3,3,0,0,1-4.243,0l-.167-.167a13.4,13.4,0,0,1-2.636,1.02V3164a3,3,0,0,1-3,3Z"
              stroke="none"
            />
            <Path
              d="M -2117.999755859375 3165.000244140625 C -2117.448486328125 3165.000244140625 -2117 3164.55126953125 -2117 3163.99951171875 L -2117 3163.53466796875 L -2117 3162.002685546875 L -2115.520751953125 3161.603759765625 C -2114.74755859375 3161.39501953125 -2113.992919921875 3161.10302734375 -2113.27783203125 3160.735595703125 L -2111.980712890625 3160.0693359375 L -2110.949462890625 3161.1005859375 L -2110.7822265625 3161.267578125 C -2110.52734375 3161.522705078125 -2110.229736328125 3161.560791015625 -2110.0751953125 3161.560791015625 C -2109.920654296875 3161.560791015625 -2109.623046875 3161.522705078125 -2109.36865234375 3161.26806640625 L -2107.95361328125 3159.852294921875 C -2107.69921875 3159.597900390625 -2107.6611328125 3159.30078125 -2107.6611328125 3159.146240234375 C -2107.6611328125 3158.99169921875 -2107.69921875 3158.694580078125 -2107.95263671875 3158.441162109375 L -2108.05908203125 3158.3349609375 L -2109.116455078125 3157.280029296875 L -2108.405029296875 3155.966552734375 C -2107.979248046875 3155.180419921875 -2107.646240234375 3154.3447265625 -2107.415283203125 3153.482421875 L -2107.018310546875 3151.999755859375 L -2105.4833984375 3151.999755859375 L -2105.025390625 3151.999755859375 C -2104.4736328125 3151.999755859375 -2104.024658203125 3151.55126953125 -2104.024658203125 3151 L -2104.024658203125 3150 C -2104.024658203125 3149.448974609375 -2104.4736328125 3149.00048828125 -2105.025390625 3149.00048828125 L -2105.4833984375 3149.00048828125 L -2107.018798828125 3149.00048828125 L -2107.41552734375 3147.51708984375 C -2107.680908203125 3146.5244140625 -2108.08056640625 3145.570556640625 -2108.603271484375 3144.681640625 L -2109.3876953125 3143.34765625 L -2108.293701171875 3142.25341796875 L -2107.954345703125 3141.9140625 C -2107.564453125 3141.524169921875 -2107.564453125 3140.889892578125 -2107.954833984375 3140.49951171875 L -2109.367431640625 3139.085693359375 C -2109.62255859375 3138.830810546875 -2109.920654296875 3138.792724609375 -2110.07568359375 3138.792724609375 C -2110.230712890625 3138.792724609375 -2110.52880859375 3138.830810546875 -2110.7822265625 3139.083984375 L -2111.382080078125 3139.684814453125 L -2112.375 3140.679443359375 L -2113.647216796875 3140.082275390625 C -2114.24951171875 3139.799560546875 -2114.8798828125 3139.568359375 -2115.520751953125 3139.3955078125 L -2117 3138.99658203125 L -2117 3137.464599609375 L -2117 3136.99951171875 C -2117 3136.4482421875 -2117.448486328125 3135.999755859375 -2117.999755859375 3135.999755859375 L -2118.999755859375 3135.999755859375 C -2119.551513671875 3135.999755859375 -2120.000244140625 3136.4482421875 -2120.000244140625 3136.99951171875 L -2120.000244140625 3137.451171875 L -2120.000244140625 3138.989501953125 L -2121.487060546875 3139.38427734375 C -2122.223876953125 3139.579833984375 -2122.94482421875 3139.851318359375 -2123.6298828125 3140.191162109375 L -2124.9169921875 3140.829833984375 L -2125.93310546875 3139.81396484375 L -2125.954345703125 3139.792724609375 L -2126.661865234375 3139.085205078125 C -2126.916259765625 3138.830810546875 -2127.213623046875 3138.792724609375 -2127.368408203125 3138.792724609375 C -2127.523193359375 3138.792724609375 -2127.820556640625 3138.830810546875 -2128.074951171875 3139.085205078125 L -2129.48974609375 3140.499755859375 C -2129.879638671875 3140.8896484375 -2129.879638671875 3141.5244140625 -2129.490234375 3141.913818359375 L -2128.90087890625 3142.5029296875 L -2127.830078125 3143.5732421875 L -2128.5693359375 3144.894287109375 C -2129.0322265625 3145.720947265625 -2129.390869140625 3146.603759765625 -2129.63525390625 3147.517578125 L -2130.0322265625 3149.00048828125 L -2131.5673828125 3149.00048828125 L -2132.000244140625 3149.00048828125 C -2132.55126953125 3149.00048828125 -2132.999755859375 3149.448974609375 -2132.999755859375 3150 L -2132.999755859375 3151 C -2132.999755859375 3151.55126953125 -2132.55126953125 3151.999755859375 -2132.000244140625 3151.999755859375 L -2131.567138671875 3151.999755859375 L -2130.031982421875 3151.999755859375 L -2129.635009765625 3153.48291015625 C -2129.426025390625 3154.2646484375 -2129.132080078125 3155.0263671875 -2128.761474609375 3155.747314453125 L -2128.0947265625 3157.04443359375 L -2129.1259765625 3158.075927734375 L -2129.490234375 3158.43994140625 C -2129.744873046875 3158.6943359375 -2129.78271484375 3158.99169921875 -2129.78271484375 3159.146240234375 C -2129.78271484375 3159.30126953125 -2129.74462890625 3159.598876953125 -2129.490234375 3159.853271484375 L -2128.074462890625 3161.268310546875 C -2127.820068359375 3161.522705078125 -2127.52294921875 3161.560791015625 -2127.368408203125 3161.560791015625 C -2127.2138671875 3161.560791015625 -2126.916748046875 3161.522705078125 -2126.6611328125 3161.26708984375 L -2126.35791015625 3160.964111328125 L -2125.30322265625 3159.91015625 L -2123.9921875 3160.6201171875 C -2123.199462890625 3161.04931640625 -2122.3564453125 3161.384033203125 -2121.48681640625 3161.615234375 L -2120.000244140625 3162.010009765625 L -2120.000244140625 3163.548095703125 L -2120.000244140625 3163.99951171875 C -2120.000244140625 3164.55126953125 -2119.551513671875 3165.000244140625 -2118.999755859375 3165.000244140625 L -2117.999755859375 3165.000244140625 M -2117.999755859375 3167.000244140625 L -2118.999755859375 3167.000244140625 C -2120.656494140625 3167.000244140625 -2122.000244140625 3165.656494140625 -2122.000244140625 3163.99951171875 L -2122.000244140625 3163.548095703125 C -2123.035888671875 3163.27294921875 -2124.022216796875 3162.878173828125 -2124.9443359375 3162.37890625 L -2125.24755859375 3162.681884765625 C -2125.8330078125 3163.267822265625 -2126.6005859375 3163.560791015625 -2127.368408203125 3163.560791015625 C -2128.135986328125 3163.560791015625 -2128.90380859375 3163.267822265625 -2129.4892578125 3162.681884765625 L -2130.904052734375 3161.26806640625 C -2132.07568359375 3160.09619140625 -2132.07568359375 3158.1962890625 -2130.904052734375 3157.025390625 L -2130.540283203125 3156.66162109375 C -2130.971923828125 3155.82177734375 -2131.318115234375 3154.930419921875 -2131.567138671875 3153.999755859375 L -2132.000244140625 3153.999755859375 C -2133.656982421875 3153.999755859375 -2134.999755859375 3152.656982421875 -2134.999755859375 3151 L -2134.999755859375 3150 C -2134.999755859375 3148.34326171875 -2133.656982421875 3147.00048828125 -2132.000244140625 3147.00048828125 L -2131.5673828125 3147.00048828125 C -2131.276123046875 3145.912109375 -2130.852783203125 3144.87890625 -2130.314697265625 3143.91748046875 L -2130.904052734375 3143.328369140625 C -2132.07568359375 3142.156494140625 -2132.07568359375 3140.257568359375 -2130.904052734375 3139.085693359375 L -2129.4892578125 3137.6708984375 C -2128.90380859375 3137.08544921875 -2128.135986328125 3136.792724609375 -2127.368408203125 3136.792724609375 C -2126.6005859375 3136.792724609375 -2125.8330078125 3137.08544921875 -2125.24755859375 3137.6708984375 L -2124.5400390625 3138.37841796875 C -2124.532958984375 3138.385498046875 -2124.52587890625 3138.392578125 -2124.518798828125 3138.399658203125 C -2123.720703125 3138.003662109375 -2122.87841796875 3137.684326171875 -2122.000244140625 3137.451171875 L -2122.000244140625 3136.99951171875 C -2122.000244140625 3135.343505859375 -2120.656494140625 3133.999755859375 -2118.999755859375 3133.999755859375 L -2117.999755859375 3133.999755859375 C -2116.3427734375 3133.999755859375 -2115 3135.343505859375 -2115 3136.99951171875 L -2115 3137.464599609375 C -2114.23681640625 3137.67041015625 -2113.50048828125 3137.941650390625 -2112.79736328125 3138.271728515625 L -2112.197509765625 3137.6708984375 C -2111.611572265625 3137.08544921875 -2110.84375 3136.792724609375 -2110.07568359375 3136.792724609375 C -2109.307861328125 3136.792724609375 -2108.539794921875 3137.08544921875 -2107.953857421875 3137.6708984375 L -2106.5400390625 3139.085693359375 C -2105.3681640625 3140.257568359375 -2105.3681640625 3142.156494140625 -2106.5400390625 3143.328369140625 L -2106.87939453125 3143.667724609375 C -2106.27294921875 3144.698974609375 -2105.7998046875 3145.8173828125 -2105.4833984375 3147.00048828125 L -2105.025390625 3147.00048828125 C -2103.368408203125 3147.00048828125 -2102.024658203125 3148.34326171875 -2102.024658203125 3150 L -2102.024658203125 3151 C -2102.024658203125 3152.656982421875 -2103.368408203125 3153.999755859375 -2105.025390625 3153.999755859375 L -2105.4833984375 3153.999755859375 C -2105.75830078125 3155.026123046875 -2106.151123046875 3156.004638671875 -2106.646484375 3156.919189453125 L -2106.5400390625 3157.025390625 C -2105.3681640625 3158.1962890625 -2105.3681640625 3160.09619140625 -2106.5400390625 3161.26708984375 L -2107.953857421875 3162.681884765625 C -2108.539794921875 3163.267822265625 -2109.3076171875 3163.560791015625 -2110.0751953125 3163.560791015625 C -2110.843017578125 3163.560791015625 -2111.610595703125 3163.267822265625 -2112.196533203125 3162.681884765625 L -2112.36376953125 3162.5146484375 C -2113.1962890625 3162.9423828125 -2114.078369140625 3163.2861328125 -2115 3163.53466796875 L -2115 3163.99951171875 C -2115 3165.656494140625 -2116.3427734375 3167.000244140625 -2117.999755859375 3167.000244140625 Z"
              stroke="none"
              fill="#a53bba"
            />
          </G>
          <G
            id="Ellipse_36"
            data-name="Ellipse 36"
            transform="translate(390 5015)"
            fill="none"
            stroke="#a53bba"
            stroke-width="2">
            <Circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
            <Circle cx="7.5" cy="7.5" r="6.5" fill="none" />
          </G>
        </G>
      </Svg>
    );
  }
};

export default SettingsIcon;
