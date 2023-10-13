import Meta from 'public/images/static/trusted/meta.png';
import Amazon from 'public/images/static/trusted/amazon.png';
import Microsoft from 'public/images/static/trusted/microsoft.png';
import IBM from 'public/images/static/trusted/ibm.png';
import Airbus from 'public/images/static/trusted/airbus.png';
import AMD from 'public/images/static/trusted/amd.png';
import Mila from 'public/images/static/trusted/mila.png';
import MIT from 'public/images/static/trusted/mit.png';

type TrustedCompanyType = {
  name: string;
  imgSrc: any;
};
const trustedCompaniesList: TrustedCompanyType[] = [
  {
    name: 'meta',
    imgSrc: Meta,
  },
  {
    name: 'amazon',
    imgSrc: Amazon,
  },
  {
    name: 'microsoft',
    imgSrc: Microsoft,
  },
  {
    name: 'ibm',
    imgSrc: IBM,
  },
  {
    name: 'airbus',
    imgSrc: Airbus,
  },
  {
    name: 'amd',
    imgSrc: AMD,
  },
  {
    name: 'mila',
    imgSrc: Mila,
  },
  {
    name: 'mit',
    imgSrc: MIT,
  },
];

export default trustedCompaniesList;
