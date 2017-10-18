import React from 'react'
import uiStyles from 'app/styles/ui'

const LineChart = props => (
  <div className={uiStyles.lineChartGlobal}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="458"
      height="341"
      viewBox="0 0 458 341"
    >
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="8.551%" y2="100%">
          <stop stopColor="#5684A2" stopOpacity="0" offset="0%" />
          <stop stopColor="#0E3250" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(0 -6)">
        <rect width="301" height="46" x="1" y="301" fill="#0f2432" />
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="14"
          fontWeight="800"
          letterSpacing=".2"
        >
          <tspan x="248.844" y="320">
            1900
          </tspan>{' '}
          <tspan x="248.503" y="338" fontFamily="PierSans" fontWeight="300">
            201
          </tspan>{' '}
          <tspan x="271.377" y="338" fontFamily="PierSans" fontWeight="300">
            4
          </tspan>
        </text>
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="14"
          fontWeight="800"
          letterSpacing=".2"
        >
          <tspan x="174.085" y="320">
            1700
          </tspan>{' '}
          <tspan x="172.876" y="338" fontFamily="PierSans" fontWeight="300">
            190
          </tspan>{' '}
          <tspan x="195.834" y="338" fontFamily="PierSans" fontWeight="300">
            0
          </tspan>
        </text>
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="14"
          fontWeight="800"
          letterSpacing=".2"
        >
          <tspan x="98.177" y="320">
            1600
          </tspan>{' '}
          <tspan x="98.025" y="338" fontFamily="PierSans" fontWeight="300">
            170
          </tspan>{' '}
          <tspan x="120.017" y="338" fontFamily="PierSans" fontWeight="300">
            0
          </tspan>
        </text>
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="14"
          fontWeight="800"
          letterSpacing=".2"
        >
          <tspan x="22.858" y="320">
            1500
          </tspan>{' '}
          <tspan x="22.209" y="338" fontFamily="PierSans" fontWeight="300">
            160
          </tspan>{' '}
          <tspan x="45.167" y="338" fontFamily="PierSans" fontWeight="300">
            0
          </tspan>
        </text>
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="14"
          fontWeight="500"
          letterSpacing=".2"
        >
          <tspan x=".5" y="40">
            Cumulative{' '}
          </tspan>{' '}
          <tspan x=".5" y="58">
            extintions % of IUCN
          </tspan>
        </text>
        <path
          stroke="url(#a)"
          d="M302.5 346.891221L302.5 67M.5 346.891221L.5 67M75.5 346.891221L75.5 67M151.5 346.891221L151.5 67M226.5 346.891221L226.5 67"
        />
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="14"
          fontWeight="400"
          letterSpacing="2.6"
        >
          <tspan x="356.904" y="251">
            Background
          </tspan>
        </text>
        <path
          stroke="#2B4D68"
          d="M1.72265625,283.816406 L301.917969,267.8125"
          strokeDasharray="4"
        />
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="12"
          fontWeight="400"
          letterSpacing="3.5"
        >
          <tspan x="370.856" y="168">
            OTHER V.
          </tspan>
        </text>
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="12"
          fontWeight="400"
          letterSpacing="3.5"
        >
          <tspan x="333.02" y="103">
            VERTEBRATES
          </tspan>
        </text>
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="12"
          fontWeight="400"
          letterSpacing="3.5"
        >
          <tspan x="406.448" y="45">
            BIRDS
          </tspan>
        </text>
        <text
          fill="#FFFFFF"
          fontFamily="PierSans"
          fontSize="12"
          fontWeight="400"
          letterSpacing="3.5"
        >
          <tspan x="365.856" y="15">
            MAMMALS
          </tspan>
        </text>
        <path stroke="#18BAB4" strokeWidth="2" d="M2.609375,7 L15.7761327,7" />
        <path
          stroke="#2B4D68"
          d="M305,24.5 L457.321754,24.5"
          opacity=".6"
          transform="matrix(-1 0 0 1 762.322 0)"
        />
        <path
          stroke="#2B4D68"
          d="M305,56.5 L457.321754,56.5"
          opacity=".6"
          transform="matrix(-1 0 0 1 762.322 0)"
        />
        <path
          stroke="#2B4D68"
          d="M305,116.5 L457.321754,116.5"
          opacity=".6"
          transform="matrix(-1 0 0 1 762.322 0)"
        />
        <path
          stroke="#2B4D68"
          d="M305,181.5 L457.321754,181.5"
          opacity=".6"
          transform="matrix(-1 0 0 1 762.322 0)"
        />
        <path
          stroke="#2B4D68"
          d="M305,267.5 L457.321754,267.5"
          opacity=".6"
          strokeDasharray="4"
          transform="matrix(-1 0 0 1 762.322 0)"
        />
        <polyline
          stroke="#9879F7"
          points="2 202.848 150.797 187.566 227.555 136.172 301.195 25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          stroke="#FFE1C7"
          points="2 270.484 140.255 266.484 226.492 259.316 300.902 181"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          stroke="#38C0B4"
          points="2 264.172 76.762 248.852 150.253 209.305 300.984 57"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          stroke="#D9F890"
          points="2 252.691 81.532 252.691 155.039 237.367 227.419 205.598 300.75 118"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </div>
)

export default LineChart
