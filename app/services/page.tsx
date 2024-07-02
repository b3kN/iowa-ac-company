"use client";

import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

export default function Services() {
  return (
    <Box
      maxW="4xl"
      m="1em auto"
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
    >
      <Heading
        as="h2"
        m="0.75em 0 1em"
        size={{ base: "2xl", lg: "3xl" }}
        px={{ base: 2, lg: 0 }}
        noOfLines={1}
      >
        Services We Provide
      </Heading>
      <Tabs isFitted={true} variant="soft-rounded">
        <TabList px={2}>
          <Tab>Heating</Tab>
          <Tab>Cooling</Tab>
          <Tab>Repair</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text pb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              aliquet mi id odio faucibus convallis. Integer in libero vel massa
              finibus commodo at ac massa. Mauris vehicula ipsum sed nunc
              consequat elementum. Donec lobortis nisi ac mi mattis venenatis.
              Donec tellus erat, varius ut diam sed, aliquet gravida velit.
              Nullam pharetra diam id urna mattis blandit. Donec pharetra lorem
              tellus, at sollicitudin sem aliquet sed. Curabitur finibus, elit
              et pharetra aliquet, lacus leo tempus leo, rhoncus pharetra tortor
              lorem sed est. Donec porttitor risus et nibh placerat, in semper
              dui ornare.
            </Text>
            <Text>
              Nunc ultrices purus dui, in lobortis tellus accumsan sit amet.
              Etiam vehicula ac odio vitae tristique. Curabitur ultricies
              ultrices est, id tempor enim faucibus eu. Nulla sem dolor,
              pharetra ut ligula vitae, imperdiet ullamcorper felis. Donec
              mattis elit tortor, ac semper nibh bibendum et. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras tempor feugiat urna nec molestie. Suspendisse
              potenti. Duis imperdiet ut mi eget scelerisque. Maecenas blandit
              vitae ligula varius aliquam. Phasellus sagittis risus eu dui
              consectetur, non gravida ante tempus. Nullam convallis auctor
              aliquam. Cras faucibus lectus leo, et condimentum tellus rhoncus
              id. Morbi sed nunc consequat, venenatis mi non, luctus mi. Nam
              nunc erat, ultricies eu massa eu, rutrum tincidunt nisi. Aenean
              non libero non sapien rutrum dictum vitae vel metus.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text pb={2}>
              Duis nec aliquam diam, a interdum velit. Nulla vulputate ipsum vel
              nulla tempor, et consectetur quam lobortis. Quisque vitae quam at
              sem molestie imperdiet et nec magna. Nulla aliquet libero sed
              libero tincidunt, sed molestie lectus bibendum. Etiam laoreet ex
              vitae pulvinar mollis. Nunc commodo fringilla odio, eu imperdiet
              orci laoreet at. Vivamus malesuada pulvinar fermentum. Aliquam et
              urna in lacus pulvinar tempus vitae eget mauris. Morbi vel dui
              dignissim, semper nisi pretium, suscipit massa. Integer
              condimentum arcu ut nisl laoreet, a gravida ex porttitor.
            </Text>
            <Text>
              Quisque aliquam, enim eget mattis consectetur, magna libero
              elementum mauris, eget bibendum mauris libero fermentum justo.
              Proin in posuere augue, a rutrum turpis. Nulla sed viverra purus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla efficitur odio posuere ex
              varius dapibus. Maecenas non dui sagittis, dignissim enim a,
              euismod turpis. Etiam porta magna nec est facilisis tempus.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text pb={2}>
              Suspendisse eget sodales sem. Praesent varius vitae justo id
              tincidunt. Etiam vel tortor ullamcorper, dictum dui nec, congue
              mi. Donec pellentesque eleifend massa vel porta. Nulla bibendum id
              ipsum a consequat. In vitae nunc dictum, lacinia nulla eget,
              convallis nibh. Phasellus molestie lorem velit, sit amet porttitor
              eros lacinia pellentesque. Aenean convallis nunc ullamcorper
              posuere auctor. Aenean placerat, metus et lobortis vulputate, diam
              ligula aliquet risus, ut vulputate metus tellus ac massa.
            </Text>
            <Text>
              Morbi pellentesque consectetur enim. Nunc venenatis, ipsum non
              laoreet vestibulum, nisl tortor ornare libero, at varius lacus
              nisl a urna. Maecenas mattis eget lectus sagittis auctor. Maecenas
              molestie finibus nulla vitae ornare. Sed suscipit purus id tortor
              finibus, vitae finibus velit consequat. Vestibulum tincidunt
              libero orci. Duis fringilla porta quam, non fermentum mauris
              molestie ac. Nam et purus imperdiet, dignissim lectus quis, mollis
              est. Sed eu tempus odio. Vivamus blandit leo in odio pellentesque
              imperdiet. Nam rutrum varius ex, nec convallis mi efficitur at.
              Nunc dapibus mattis scelerisque. Nulla ac imperdiet purus. Integer
              quis congue magna, eu vestibulum sapien. Cras eleifend rhoncus
              tempus. Nulla ut neque augue.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
