import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house" />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="stace-between">
          <Flex alignSelf="center">
            <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
            <Text fontWeight="bold" fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url} />
          </Box>
        </Flex><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;