import React, { useEffect, useRef, useState } from "react";
import "../CSS/Blog.css";
import { SlCalender } from "react-icons/sl";
import { TfiComments } from "react-icons/tfi";
import { Card, Center, Grid, Image, Modal, Text, Title, Divider, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useDisclosure } from '@mantine/hooks';
import VanillaTilt from "vanilla-tilt";

function Blog() {
  // Window Scroll To Top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [1])
  // Media Query 
  const query = useMediaQuery('(max-width:1000px)')
  const query_500 = useMediaQuery('(max-width:850px)')


  const [opened, { open, close }] = useDisclosure(false);

  // UseState
  const [indexVal, setIndex] = useState(0)


  const data = [
    {
      id: 0,
      icon: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
      title:
        " The Revolution of Artificial Intelligence and Machine Learning in India",
      content:
        `Artificial Intelligence (AI) and Machine Learning (ML) have emerged as transformative
        technologies, revolutionizing various industries in India. From healthcare and finance to
        e-commerce and agriculture, the adoption of AI and ML has brought forth a wave of
        innovation and efficiency. In this blog post, we will explore the wide-ranging applications of
        AI and ML across these sectors and delve into the benefits they offer.
        `,
      title2: "Health Care:",
      title2_para: `In the healthcare industry, AI and ML have opened up new possibilities for diagnosis,
      treatment, and patient care. Intelligent systems can analyze vast amounts of medical data,
      aiding in accurate disease detection and personalized treatment plans. AI-powered chatbots
      provide round-the-clock assistance to patients, answering queries and offering guidance.
      Additionally, predictive analytics can help identify potential health risks and enable proactive
      interventions.
      `,
      title3: "Finance:",
      title3_para: `AI and ML have revolutionized the financial sector, transforming how we manage money and
      make decisions. Algorithms can analyze market trends, predict stock prices, and automate
      trading processes. Fraud detection systems leverage ML techniques to identify suspicious
      activities, enhancing security measures. Virtual assistants powered by AI enable personalized
      financial advice and recommendations, catering to individual needs.
      `,
      title4: "E-commerce:",
      title4_para: ` The e-commerce industry has witnessed a significant impact from AI and ML.
      Recommendation engines utilize ML algorithms to analyze customer preferences and
      behavior, offering personalized product suggestions. Chatbots provide seamless customer
      support, enhancing the shopping experience. AI-powered image recognition technology
      enables visual search, simplifying product discovery. Supply chain optimization and demand
      forecasting benefit from AI-driven analytics, ensuring efficient inventory management.`,
      title5: "Agriculture:",
      title5_para: `AI and ML are transforming the agricultural landscape in India, addressing challenges and
      improving productivity. Smart farming techniques employ sensors, drones, and AI algorithms
      to monitor crop health, optimize irrigation, and detect diseases. ML models analyze weather
      data, soil conditions, and historical patterns to offer precise recommendations for planting
      and harvesting. These technologies empower farmers with data-driven insights, enabling
      informed decision-making and resource optimization.
      `,
      title6: "Benefits and Future Prospects:",
      title6_para: `The widespread adoption of AI and ML in India brings numerous benefits. Increased
      efficiency, enhanced accuracy, and cost reduction are just a few advantages realized across
      industries. AI and ML also have the potential to bridge the gap in access to quality services,
      particularly in rural areas. The continuous advancements in AI research and development,
      coupled with the availability of vast data sets, lay a strong foundation for future growth and
      innovation`,
      title7: "Conclusion",
      title7_para: `Artificial Intelligence and Machine Learning have ushered in a new era of possibilities for
      industries in India. The applications of AI and ML span healthcare, finance, e-commerce, and
      agriculture, driving efficiency, personalization, and informed decision-making. As these
      technologies continue to evolve, we can expect further breakthroughs that will reshape
      industries and improve the lives of people across the country. Embracing AI and ML is not
      just a trend but a necessity for businesses to stay competitive and thrive in the digital age.`
    },
    {
      id: 1,
      icon: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
      title:
        ` Embracing the Power of Connectivity: Exploring the Rise of IoT in India`,
      content:
        `The Internet of Things (IoT) has emerged as a game-changer in the technological landscape,
       revolutionizing various sectors in India. With increased connectivity and the widespread
       adoption of smart devices, IoT is gaining momentum, paving the way for enhanced efficiency
       and data-driven decision-making. In this blog post, we will delve into the growing influence
       of IoT across sectors such as agriculture, manufacturing, transportation, and smart cities,
       highlighting its transformative impact.
       `,
      title2: "Agriculture:",
      title2_para: `IoT is revolutionizing the agriculture sector in India, empowering farmers with real-time
      insights and improved productivity. Smart sensors embedded in fields monitor soil moisture
      levels, temperature, and humidity, enabling precise irrigation and optimal resource utilization.
      Connected devices aid in pest detection and prevention, minimizing crop damage.
      Data-driven analytics provide valuable information for crop planning, yield optimization, and
      sustainable farming practices, ensuring higher agricultural output
      .
       `,
      title3: "Manufacturing:",
      title3_para: `IoT solutions are reshaping the manufacturing industry by streamlining operations,
      optimizing efficiency, and enhancing safety. Connected sensors and devices enable real-time
      monitoring of production lines, detecting anomalies and minimizing downtime. Predictive
      maintenance leverages data analytics to anticipate equipment failures, reducing costly repairs
      and enhancing productivity. IoT-powered inventory management systems optimize supply
      chains, ensuring seamless production processes and timely delivery  
       `,
      title4: "Transportation:",
      title4_para: ` IoT is revolutionizing the transportation sector, enhancing connectivity, and improving the
      overall efficiency of the system. Connected vehicles equipped with sensors and GPS enable
      real-time tracking and monitoring of routes, traffic conditions, and fuel consumption. Smart
      parking solutions leverage IoT technology to guide drivers to available parking spots,
      reducing congestion and saving time. Additionally, IoT-enabled fleet management systems
      optimize logistics, leading to cost savings and timely deliveries.
      `,
      title5: "Smart Cities:",
      title5_para: `IoT plays a pivotal role in building smart cities, creating connected and sustainable urban
      ecosystems. Intelligent infrastructure systems, such as smart street lighting, waste
      management, and energy distribution, ensure efficient resource utilization. IoT-powered
      sensors and devices collect data on air quality, noise levels, and traffic patterns, enabling
      better urban planning and environmental management. Smart surveillance systems enhance
      public safety, contributing to a secure and livable city environment.
       `,
      title6: "Benefits and Future Prospects:",
      title6_para: `The adoption of IoT solutions in India brings forth numerous benefits. Improved efficiency,
      enhanced productivity, and data-driven decision-making are some of the advantages
      experienced across sectors. IoT also has the potential to bridge the urban-rural divide,
      providing access to advanced services in remote areas. With ongoing technological
      advancements and the growing availability of affordable smart devices, the future of IoT in
      India looks promising, offering endless possibilities for innovation and sustainable
      development.
      `,
      title7: "Conclusion",
      title7_para: `The rise of IoT in India is transforming sectors such as agriculture, manufacturing,
      transportation, and smart cities, paving the way for a connected and efficient future. The
      integration of smart devices, sensors, and data analytics empowers stakeholders with
      real-time insights, enhancing productivity, and enabling data-driven decision-making.
      Embracing IoT is not just a trend but a necessity for businesses and policymakers to unlock
      the full potential of connectivity and achieve sustainable growth. As IoT continues to evolve,
      its transformative impact will reshape industries and contribute to the building of a
      technologically advanced nation.`
    },
    {
      id: 2,
      icon: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
      title:
        `Unleashing the Power of Blockchain: Transforming Industries with Transparency
       and Security`,
      content:
        `Blockchain technology has emerged as a groundbreaking innovation, revolutionizing the way
       transactions are conducted and recorded. Its decentralized and transparent nature offers
       immense potential across various industries, including banking, supply chain management,
       healthcare, and government services. In this blog post, we will delve into the transformative
       impact of blockchain, explore its applications, and understand why both startups and
       established companies are investing in this revolutionary technology`,
      title2: "Banking:",
      title2_para: `The banking industry is embracing blockchain to enhance security and streamline financial
      transactions. Blockchain provides a decentralized ledger that ensures transparency and
      immutability, eliminating the need for intermediaries. Smart contracts built on blockchain
      facilitate secure and efficient processes such as cross-border payments, identity verification,
      and fraud detection. Blockchain's potential to revolutionize banking lies in its ability to
      reduce costs, increase transaction speed, and enhance trust among participants.
       `,
      title3: "Supply Chain Management:",
      title3_para: `Blockchain is transforming supply chain management by ensuring transparency, traceability,
      and accountability. With blockchain, every step of the supply chain, from sourcing to
      delivery, can be recorded and verified, reducing fraud and counterfeiting. Smart contracts
      enable automated and secure transactions, improving efficiency and reducing paperwork.
      Blockchain-powered supply chain solutions enable real-time tracking, ensuring the
      authenticity and quality of products, and creating trust among stakeholders.
       `,
      title4: "Healthcare:",
      title4_para: `In the healthcare industry, blockchain holds immense potential for secure and interoperable
      health records, efficient drug supply chain management, and clinical research.
      Blockchain-based electronic health records ensure data integrity, patient privacy, and
      seamless sharing of information among healthcare providers. With blockchain,
      pharmaceutical companies can track the entire drug supply chain, reducing the risk of
      counterfeit drugs. Blockchain also enables secure sharing of medical research data, fostering
      collaboration and accelerating breakthroughs in treatments.
      `,
      title5: "Government Services:",
      title5_para: `Blockchain is being explored by governments worldwide to enhance the efficiency,
      transparency, and security of public services. Land registry systems built on blockchain
      ensure tamper-proof records, preventing fraudulent land transactions. Voting systems based
      on blockchain offer increased transparency and trust in electoral processes. Additionally,
      blockchain enables secure and efficient management of identities, reducing fraud and
      improving service delivery in areas such as social welfare and public administration.
       `,
      title6: "Startups and Established Companies:",
      title6_para: `Both startups and established companies recognize the potential of blockchain technology
      and are investing in its development and exploration. Startups are leveraging blockchain to
      disrupt traditional industries and create innovative solutions. Established companies are
      integrating blockchain into their operations to streamline processes, enhance security, and
      drive efficiency. The versatility of blockchain allows for diverse applications, encouraging
      continuous experimentation and growth in the industry.`,
      title7: "Conclusion",
      title7_para: `Blockchain technology is revolutionizing industries by offering secure, transparent, and
      efficient solutions. From banking and supply chain management to healthcare and
      government services, blockchain has the potential to transform how transactions are
      conducted and recorded. As startups and established companies continue to invest in
      blockchain-based solutions, we can expect increased adoption and exploration of its use
      cases. Embracing blockchain is not just a trend but a strategic move to enhance security,
      transparency, and efficiency in the digital age. With its transformative power, blockchain is
      reshaping industries and paving the way for a decentralized future.`
    },
    {
      id: 3,
      icon: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
      title:
        `Embracing the Cloud: Unlocking the Potential of Cloud Computing in India
       `,
      content:
        `Cloud computing has emerged as a game-changer in the digital era, offering businesses in
       India the ability to scale, store, process data, and access a wide range of cloud-based services.
       From startups to established enterprises, organizations are recognizing the immense benefits
       of adopting cloud infrastructure, Software-as-a-Service (SaaS), and Platform-as-a-Service
       (PaaS) solutions. In this blog post, we will explore the growing significance of cloud
       computing in India, its advantages, and the transformative impact it has on businesses across
       various sectors.
       `,
      title2: "Scalability and Flexibility:",
      title2_para: `One of the primary advantages of cloud computing is its scalability and flexibility. With
      cloud-based infrastructure, businesses can easily scale their resources up or down based on
      their needs. This ensures optimal utilization of resources, cost-efficiency, and the ability to
      handle fluctuating workloads. Cloud services allow organizations to rapidly deploy
      applications and services, enabling faster time-to-market and increased agility in a dynamic
      business environment.
      
       `,
      title3: "Data Storage and Processing:",
      title3_para: `Cloud computing provides organizations with the ability to store and process vast amounts of
      data efficiently. Cloud storage solutions offer scalable and secure data repositories,
      eliminating the need for physical storage infrastructure. Additionally, cloud-based data
      processing capabilities enable businesses to perform complex analytics, extract valuable
      insights, and make data-driven decisions, leading to enhanced operational efficiency and
      competitive advantage.
       `,
      title4: "Cost Savings and Operational Efficiency:",
      title4_para: ` Adopting cloud computing can result in significant cost savings for businesses. With cloud
      infrastructure, organizations can avoid upfront investments in hardware, software, and
      maintenance. Pay-as-you-go models allow businesses to pay only for the resources they
      consume, reducing operational costs and providing cost predictability. Cloud-based services
      also offload IT management and maintenance responsibilities, enabling organizations to focus
      on core competencies and strategic initiatives.`,
      title5: "Software-as-a-Service (SaaS):",
      title5_para: `SaaS solutions have gained immense popularity in India, offering businesses access to a wide
      range of software applications without the need for complex installations and maintenance.
      SaaS applications are delivered over the internet, allowing organizations to rapidly deploy
      and use software on a subscription basis. This eliminates the need for costly software licenses
      and provides flexibility in accessing applications from anywhere, anytime, using any device.
       `,
      title6: "Platform-as-a-Service (PaaS):",
      title6_para: `PaaS solutions empower businesses to develop, deploy, and manage applications without the
      complexities of infrastructure management. PaaS providers offer a complete development
      and deployment environment, including tools, frameworks, and infrastructure components.
      This allows organizations to focus on application development and innovation, accelerating
      time-to-market and reducing development costs.`,
      title7: "Security and Reliability",
      title7_para: `Cloud computing providers invest heavily in security measures to protect data and ensure
      high availability. They employ robust security protocols, encryption techniques, and backup
      systems to safeguard data from breaches and disasters. By leveraging cloud services,
      organizations can benefit from enterprise-grade security and reliability, which may be
      challenging to achieve with on-premises infrastructure.`,
      title8: "Conclusion",
      title8_para: `Cloud computing has become an integral part of the digital transformation journey for
      businesses in India. Its scalability, flexibility, cost-efficiency, and accessibility have
      revolutionized how organizations store, process, and access data, as well as leverage software
      applications. As cloud computing continues to evolve, businesses must carefully evaluate
      their needs and choose the right cloud-based solutions to unlock the full potential of this
      transformative technology. Embracing the cloud is no longer a choice but a strategic
      imperative for organizations seeking to stay competitive and agile in the rapidly evolving
      digital landscape.`
    },
    {
      id: 4,
      icon: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
      title:
        `Unveiling a New Reality: Exploring the Impact of Augmented Reality (AR) and
        Virtual Reality (VR) `,
      content:
        `Augmented Reality (AR) and Virtual Reality (VR) have swiftly emerged as groundbreaking
        technologies that are reshaping the way we experience the world around us. These immersive
        technologies are not just limited to gaming and entertainment; they are revolutionizing
        various industries such as real estate, education, training, and more. In this blog post, we will
        delve into the fascinating world of AR and VR, their applications, and the profound impact
        they are poised to have across diverse sectors.
        
       `,
      title2: "Gaming and Entertainment:",
      title2_para: `AR and VR have unlocked unprecedented possibilities in the gaming and entertainment
      industry. With AR, virtual elements are superimposed onto the real world, creating interactive
      and captivating experiences. From Pokémon GO's augmented reality gameplay to VR
      headsets transporting users to virtual worlds, these technologies have revolutionized how we
      play, watch movies, and enjoy immersive storytelling.      
       `,
      title3: "Real Estate and Architecture:",
      title3_para: `AR and VR have transformed the way we visualize and experience real estate properties.
      With AR, potential buyers can use their smartphones or tablets to view virtual furniture
      placements, interior designs, and even take virtual tours of properties. VR allows architects,
      engineers, and designers to create virtual walkthroughs, enabling stakeholders to experience a
      space before it is built. This technology streamlines decision-making, enhances customer
      engagement, and reduces costs
       `,
      title4: "Education and Training:",
      title4_para: ` AR and VR offer groundbreaking possibilities in the field of education and training. Students
      can explore historical sites, walk through ancient civilizations, and engage in interactive
      learning experiences through AR. VR provides immersive training simulations for industries
      like healthcare, aviation, and manufacturing, allowing learners to practice skills in a safe and
      controlled environment. These technologies promote experiential learning, improving
      knowledge retention and engagement.`,
      title5: "Retail and E-commerce:",
      title5_para: `AR and VR are revolutionizing the retail and e-commerce landscape. AR-powered try-on
      experiences allow customers to virtually try on clothing and accessories, helping them make
      informed purchase decisions. VR offers virtual storefronts and immersive shopping
      experiences, eliminating geographical barriers and expanding customer reach. These
      technologies enhance the overall shopping experience, increase customer satisfaction, and
      drive online sales.
      
       `,
      title6: "Healthcare and Medicine:",
      title6_para: `AR and VR have found compelling applications in healthcare and medicine. Surgeons can
      use AR overlays during procedures, providing real-time guidance and critical information.
      VR is used for pain management, rehabilitation, and exposure therapy for anxiety disorders.
      These technologies improve medical training, enhance patient outcomes, and open up new
      possibilities for remote patient care.`,
      title7: "The Future Impact",
      title7_para: `The impact of AR and VR is set to extend beyond the current applications. As technology
      continues to evolve, we can expect advancements such as AR glasses, holographic displays,
      and even more immersive VR experiences. Industries like tourism, marketing, automotive,
      and engineering are also exploring the potential of AR and VR, paving the way for further
      innovation and growth.`,
      title8: "Conclusion",
      title8_para: `Augmented Reality (AR) and Virtual Reality (VR) are transforming the way we interact,
      learn, and experience the world around us. From gaming and entertainment to real estate,
      education, and healthcare, the applications of these technologies are vast and ever-expanding.
      As AR and VR continue to evolve, businesses and industries need to embrace these
      technologies to unlock their full potential, offering enhanced experiences, improved
      efficiencies, and new opportunities for growth. The journey into this new reality has just
      begun, and the possibilities are limitless.`
    },
    {
      id: 5,
      icon: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
      title:
        `The Digital Transformation: Unveiling the Power of E-commerce and Digital
        Payments in India`,
      content:
        `The rapid growth of e-commerce and digital payments in India has revolutionized the retail
        industry, providing consumers with convenient and secure ways to shop and transact online.
        With increasing internet penetration and the widespread adoption of smartphones, the
        e-commerce market in India is flourishing. In this blog post, we will explore the
        transformative impact of e-commerce and digital payments, reshaping the retail landscape
        and enhancing the shopping experience for millions of Indians.
       `,
      title2: "The Rise of Online Shopping:",
      title2_para: `Online shopping has become the norm for Indian consumers, offering a wide array of
      products and services at their fingertips. From electronics and fashion to groceries and home
      essentials, e-commerce platforms provide a seamless shopping experience, saving time and
      offering competitive pricing. The convenience of doorstep delivery, easy returns, and
      customer reviews have propelled the growth of online shopping, enabling consumers to make
      informed purchase decisions
       `,
      title3: "The Convenience of Mobile Wallets:",
      title3_para: `Digital payment platforms and mobile wallets have simplified the way transactions are
      conducted. Mobile wallet applications such as Paytm, PhonePe, and Google Pay have gained
      widespread popularity, allowing users to make payments, transfer funds, and even pay bills
      with just a few taps on their smartphones. The convenience, speed, and security offered by
      mobile wallets have revolutionized the way Indians handle their finances, reducing the
      dependency on cash transactions.
      
       `,
      title4: "Secure and Seamless Transactions:",
      title4_para: `Digital payment systems have significantly enhanced the security and transparency of
      transactions. With robust encryption and multiple authentication layers, online payments have
      become more secure than ever before. Additionally, the introduction of Unified Payments
      Interface (UPI) has streamlined the payment process, enabling seamless transactions between
      different banks and payment platforms. This interoperability has made digital payments more
      accessible and user-friendly.
      `,
      title5: "Boosting Entrepreneurship and Small Businesses:",
      title5_para: `E-commerce platforms have provided a thriving marketplace for entrepreneurs and small
      businesses in India. With minimal infrastructure requirements and access to a vast customer
      base, sellers can set up online stores and reach customers across the country. This has
      democratized the retail landscape, empowering local artisans, craftsmen, and businesses to
      showcase their products and expand their reach. Digital payments have played a vital role in
      facilitating these transactions, ensuring timely and secure payments for sellers.
      
       `,
      title6: "Driving Financial Inclusion:",
      title6_para: `E-commerce and digital payments have played a significant role in driving financial inclusion
      in India. With traditional banking services often limited in remote areas, digital payment
      platforms have bridged the gap, providing individuals with access to financial services. This
      has led to the empowerment of individuals and the facilitation of economic growth, as more
      people gain access to the formal financial system and participate in the digital economy.`,
      title7: "The Future of E-commerce and Digital Payments:",
      title7_para: `As technology continues to advance, the future of e-commerce and digital payments in India
      is promising. With the advent of artificial intelligence, machine learning, and data analytics,
      personalized shopping experiences, targeted marketing campaigns, and fraud prevention
      systems will become more sophisticated. The integration of voice assistants and virtual
      reality in e-commerce platforms will further enhance the shopping experience, making it
      more interactive and immersive.`,
      title8: "Conclusion:",
      title8_para: `E-commerce and digital payments have transformed the retail landscape in India, offering
      consumers a convenient, secure, and diverse shopping experience. The widespread adoption
      of mobile wallets and digital payment platforms has revolutionized the way transactions are
      conducted, promoting financial inclusion and empowering small businesses. As technology
      continues to evolve, the future of e-commerce and digital payments holds exciting
      possibilities, paving the way for a digitally-driven and inclusive economy. With India's
      growing internet penetration and tech-savvy population, the journey of e-commerce and
      digital payments is set to soar to new heights.`,
    },
  ];

  return (
    <div className="blog-main">
      <Grid gutter="30px" className="grid_Container">
        {
          data.map((value, index) => {
            return (
              <>
                <Grid.Col
                  key={index}
                  onClick={() => setIndex(index)}
                  span={query ? "" : 4}
                  grow>
                  <Card onClick={open}
                    // data-aos="zoom-in"
                    // data-aos-delay="400"
                    // data-aos-duration="500"
                    // data-aos-once='true'
                    className="hover_scale"
                    shadow="sm"
                    radius="md"
                    withBorder mih={query ? "" : 500}>
                    <Card.Section>
                      <Image height={180} src={value.icon} />
                    </Card.Section>
                    <Center style={{ padding: "10px 0" }}>
                      <Title order={query ? 3 : 6} style={{ textAlign: "center" }}>
                        {value.title}
                      </Title>
                    </Center>
                    <Center>
                      <Text style={{ textAlign: "center" }}>
                        {value.content}
                      </Text>
                    </Center>
                  </Card>
                </Grid.Col>
              </>
            )
          })
        }
        <Modal
          overlayOpacity={0.55}
          // size={1500}
          overlayBlur={3}
          opened={opened} onClose={close}
          title="Blog Articles"
          fullScreen
          transitionProps={{ transition: 'fade', duration: 200 }}
          centered
        >
          <Divider />
          <br></br>
          <Center>
            <img width="40%" src={data[indexVal].icon} />
          </Center>
          <Title order={query ? 6 : 3}>
            {data[indexVal].title}
          </Title>
          <Title order={5} p={5}>
            Introduction:
          </Title>
          <Text pl={query ? 10 : 50}>
            {data[indexVal].content}
          </Text>
          <Title order={5} p={5}>
            {data[indexVal].title2}
          </Title>
          <Text pl={query ? 10 : 50}>
            {data[indexVal].title2_para}
          </Text>
          <Title order={5} p={5}>
            {data[indexVal].title3}
          </Title>
          <Text pl={query ? 10 : 50}>
            {data[indexVal].title3_para}
          </Text>
          <Title order={5} p={5}>
            {data[indexVal].title4}
          </Title>
          <Text pl={query ? 10 : 50}>
            {data[indexVal].title4_para}
          </Text>
          <Title order={5} p={5}>
            {data[indexVal].title5}
          </Title>
          <Text pl={query ? 10 : 50}>
            {data[indexVal].title5_para}
          </Text>
          <Title order={5} p={5}>
            {data[indexVal].title6}
          </Title>
          <Text pl={query ? 10 : 50}>
            {data[indexVal].title6_para}
          </Text>
          <Title order={5} p={5}>
            {data[indexVal].title7}
          </Title>
          <Text pl={query ? 10 : 50}>
            {data[indexVal].title7_para}
          </Text>
          <Title order={5} p={5}>
            {data[indexVal].title8}
          </Title>
          <Text pl={query ? 10 : 50}>
            {data[indexVal].title8_para}
          </Text>
        </Modal>
      </Grid>
    </div>
  );
}
export default Blog;
