import { ArrowRight, Check, X } from 'lucide-react';
import React from 'react';

const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: "Age of Roof",
      shingleSaver: "0-7 years",
      revive: "7-15 years",
      bioBoost: "10+ years",
      soybeanOil: "Any age"
    },
    {
      feature: "Life Added",
      shingleSaver: "10-15 years",
      revive: "5-10 years",
      bioBoost: "3-5 years",
      soybeanOil: "Up to 3 years"
    },
    {
      feature: "Warranty",
      shingleSaver: "15-Year Money Back",
      revive: "10-Year Coverage",
      bioBoost: "5-Year Limited",
      soybeanOil: "5-Year Limited"
    },
    {
      feature: "Breathability",
      shingleSaver: true,
      revive: true,
      bioBoost: true,
      soybeanOil: true
    },
    {
      feature: "Rejuvenation",
      shingleSaver: true,
      revive: true,
      bioBoost: true,
      soybeanOil: false
    },
    {
      feature: "Weather Resistance*",
      shingleSaver: true,
      revive: true,
      bioBoost: false,
      soybeanOil: false
    },
    {
      feature: "Hail Impact Resistance",
      shingleSaver: true,
      revive: true,
      bioBoost: false,
      soybeanOil: false
    },
    {
      feature: "Wind Resistance",
      shingleSaver: true,
      revive: true,
      bioBoost: false,
      soybeanOil: false
    },
    {
      feature: "Heat Resistance",
      shingleSaver: true,
      revive: true,
      bioBoost: false,
      soybeanOil: false
    },
    {
      feature: "UV Resistance",
      shingleSaver: true,
      revive: true,
      bioBoost: false,
      soybeanOil: false
    },
    {
      feature: "Reduce Granule Loss",
      shingleSaver: true,
      revive: true,
      bioBoost: false,
      soybeanOil: false
    },
    {
      feature: "Freeze-Thaw Resistance",
      shingleSaver: true,
      revive: true,
      bioBoost: false,
      soybeanOil: false
    },
    {
      feature: "Growth & Staining Protection",
      shingleSaver: true,
      revive: true,
      bioBoost: false,
      soybeanOil: false
    }
  ];

  const renderCell = (value: string | boolean): React.ReactNode => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="text-green-500 mx-auto" size={24} />
      ) : (
        <X className="text-red-500 mx-auto" size={24} />
      );
    }
    return <span className="text-sm text-gray-800">{value}</span>;
  };

  return (
    <section className="hidden md:block bg-gray-50 py-12 md:py-20 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            COMPARE ROOF PROTECTION OPTIONS
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Not all roof treatments are created equal. See how our GoNano-powered options stack up against traditional solutions—and choose the right protection based on your roof&apos;s age and condition.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-200 text-gray-900 font-bold text-left px-6 py-4 text-sm md:text-base border border-gray-300">
                  Feature
                </th>
                <th className="bg-[#8b7dff] text-white font-bold px-6 py-4 text-sm md:text-base border border-gray-300">
                  <div>Shingle Saver</div>
                  <div className="text-xs font-normal mt-1">Best</div>
                </th>
                <th className="bg-[#7b6dff] text-white font-bold px-6 py-4 text-sm md:text-base border border-gray-300">
                  <div>Revive</div>
                  <div className="text-xs font-normal mt-1">Better</div>
                </th>
                <th className="bg-[#6b5dff] text-white font-bold px-6 py-4 text-sm md:text-base border border-gray-300">
                  <div>Bio-Boost</div>
                  <div className="text-xs font-normal mt-1">Good</div>
                </th>
                <th className="bg-orange-500 text-white font-bold px-6 py-4 text-sm md:text-base border border-gray-300">
                  <div>Soybean Oil</div>
                  <div className="text-xs font-normal mt-1">Competitor</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="font-semibold text-gray-900 text-left px-6 py-4 text-sm md:text-base border border-gray-300">
                    {row.feature}
                  </td>
                  <td className="text-center px-6 py-4 border border-gray-300">
                    {renderCell(row.shingleSaver)}
                  </td>
                  <td className="text-center px-6 py-4 border border-gray-300">
                    {renderCell(row.revive)}
                  </td>
                  <td className="text-center px-6 py-4 border border-gray-300">
                    {renderCell(row.bioBoost)}
                  </td>
                  <td className="text-center px-6 py-4 border border-gray-300">
                    {renderCell(row.soybeanOil)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-gray-600 mb-8">
          <p>* Weather resistance includes anti-moisture and ice damming protection.</p>
          <p>Source: GoNano Inc. (2025)</p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-[#675CE7] hover:bg-[#7a6bef] text-white font-bold px-8 md:px-12 py-4 rounded text-base md:text-lg transition-colors inline-flex items-center gap-2">
            BOOK YOUR FREE EVALUATION TODAY
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;