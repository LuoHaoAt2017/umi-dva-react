export default {
  'GET /api/routes': function (_, res: any) {
    res.status(200).send({
      routes: [
        {
          path: '/Stark',
          name: '史塔克家族',
        },
        {
          path: '/Lannister',
          name: '兰尼斯特家族',
        },
        {
          path: '/Baratheon',
          name: '拜拉席恩家族',
        },
        {
          path: '/Targaryen',
          name: '坦格利安家族',
        },
        {
          path: '/Martell',
          name: '马泰尔家族',
        },
        {
          path: '/Tully',
          name: '徒利家族',
        },
        {
          path: '/Ayrrn',
          name: '艾林家族',
        },
        {
          path: '/Tyrell',
          name: '提利尔家族',
        },
        {
          path: '/Greyjoy',
          name: '葛雷乔伊家族',
        },
      ],
    });
  },
  'GET /api/xml': {
    data: `<POOR_IN200901UV ITSVersion="XML_1.0" xmlns="urn:hl7-org:v3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:hl7-org:v3 ../../Schemas/POOR_IN200901UV20.xsd">
    <!-- 消息ID 固定值为;解析时，消费系统根据消息ID判断消息的消息类型。-->
    <!-- 
      消息ID extension请使用GUID生成 
      消息ID extension请使用GUID生成 
      消息ID extension请使用GUID生成 
    -->
    <id root="1.2.156.112713.1.1.3.13" extension=""/>
    <!-- 消息创建时间 -->
    <creationTime value=""/>
    <!-- 交互ID "取值可以为以下列出值中任意一个,正式使用时设置为""P""P(Production); D(Debugging); T(Training)"-->
    <interactionId root="" extension="JH0201"/>
    <!-- 消息用途: P(Production); D(Debugging); T(Training) -->
    <processingCode code="P"/>
    <!-- 消息处理模式: "取值可以为以下列出值中任意一个，正式使用时设置为""T""A(Archive);I(Initial load); R(Restore from archive); T(Current processing)" -->
    <processingModeCode code="T"/>
    <!-- 消息应答: "取值可以为以下列出值中任意一个，正式使用时设置为""NE""AL(Always); ER(Error/reject only); NE(Never)"-->
    <acceptAckCode code="NE"/>
    <!-- 接受者 -->
    <receiver typeCode="RCV">
      <device classCode="DEV" determinerCode="INSTANCE">
        <!-- 接受者ID root为医院内部定义各个系统ID-->
        <id>
          <item root="1.2.156.112713.1.1.1" extension=""/>
        </id>
      </device>
    </receiver>
    <!-- 发送者 -->
    <sender typeCode="SND">
      <device classCode="DEV" determinerCode="INSTANCE">
        <!-- 发送者ID root为医院内部定义各个系统ID-->
        <id>
          <item root="1.2.156.112713.2.1s.1" extension="HIS"/>
        </id>
      </device>
    </sender>
    <!-- 封装的消息内容 -->
    <controlActProcess classCode="CACT" moodCode="EVN">
      <!-- 消息交互类型 @code: "
      新增:new
      修改：update（内容为修改之后的状态标示位）
      删除：delete（Delete的场合只发送给CDR；delete的消息只需发送患者信息和对应申请单号或医嘱号）
      补发：replace(消息补发工具发送的消息）"
  -->
      <code code=""/>
      <subject typeCode="SUBJ" xsi:nil="false">
        <placerGroup classCode="GROUPER" moodCode="RQO">
          <subject typeCode="SBJ">
            <patient classCode="PAT">
              <id>
                <!-- 域ID "门诊: 01住院：02体检：03"-->
                <item root="1.2.156.112713.1.1.2.1.5" extension=""/>
                <!-- 患者ID " 域ID=01 门诊时为PATIENT_ID  域ID=02  住院时为PATIENT_ID 域ID=03  体检时为体检档案号"-->
                <item root="1.2.156.112713.1.1.2.1.6" extension=""/>
                <!-- 就诊号 "就诊类别=01门诊时为门诊号
                   就诊类别=0201普通急诊为门诊号
                   就诊类别=0202急诊留观时为住院号
                   就诊类别=03住院时为住院号
                   就诊类别=0401普通体检时为体检档案号
                   就诊类别=0402干保体检时为体检档案号
                   就诊类别=05转院是为住院号"
  -->
                <item root="1.2.156.112713.1.1.2.1.21" extension=""/>
                <!-- enc_id-->
                <item root="1.2.156.112713.1.1.2.1.21" extension="enc_id" ></item>
  
              </id>
              <!-- 病区编码/病区名 床号 病人当前所在科室-->
              <addr xsi:type="BAG_AD">
                <item use="TMP">
                  <part type="BNR" value="" code="" codeSystem="1.2.156.112713.1.1.1.4.7"/>
                  <part type="CAR" value=""/>
                </item>
              </addr>
              <!--个人信息 必须项已使用 -->
              <patientPerson classCode="PSN">
                <!-- 身份证号/医保卡号 -->
                <id>
                  <!-- 身份证号 -->
                  <item extension="" root="1.2.156.112713.1.1.2.1.8"/>
                  <!-- 医保卡号 -->
                  <item extension="" root="1.2.156.112713.1.1.2.1.4"/>
                </id>
                <!--姓名 -->
                <name xsi:type="BAG_EN">
                  <item>
                    <part value=""/>
                  </item>
                </name>
                <!-- 联系电话 -->
                <telecom xsi:type="BAG_TEL">
                  <!-- 联系电话 -->
                  <item value=""/>
                </telecom>
                <!--性别代码 -->
                <administrativeGenderCode code="" codeSystem="1.2.156.112713.1.1.1.2.1"/>
                <!--出生日期 -->
                <birthTime value="">
                  <!--年龄 -->
                  <originalText value=""/>
                </birthTime>
                <!--住址 -->
                <addr xsi:type="BAG_AD">
                  <item use="H">
                    <part type="AL" value=""/>
                  </item>
                </addr>
                <!--婚姻状况类别编码 -->
                <maritalStatusCode code="" codeSystem="1.2.156.112713.1.1.1.2.2"/>
                <!--民族编码 -->
                <ethnicGroupCode>
                  <item code="" codeSystem="1.2.156.112713.1.1.1.2.3"/>
                </ethnicGroupCode>
                <!--雇佣关系 -->
                <asEmployee classCode="EMP">
                  <!--职业编码 -->
                  <occupationCode code="" codeSystem="1.2.156.112713.1.1.1.2.5">
                    <!--职业 -->
                    <displayName value=""/>
                  </occupationCode>
                  <!--工作单位 -->
                  <employerOrganization determinerCode="INSTANCE" classCode="ORG">
                    <!--工作单位名称 -->
                    <name xsi:type="BAG_EN">
                      <item>
                        <part value=""/>
                      </item>
                    </name>
                    <contactParty classCode="CON" xsi:nil="true"/>
                  </employerOrganization>
                </asEmployee>
                <!--公民身份 -->
                <asCitizen>
                  <!--所属国家 -->
                  <politicalNation>
                    <!--国籍编码 -->
                    <code code="" codeSystem="1.2.156.112713.1.1.1.2.4">
                      <!--国家 -->
                      <displayName value=""/>
                    </code>
                  </politicalNation>
                </asCitizen>
                <!--联系人（0..n可循环） -->
                <contactParty classCode="CON">
                  <!--联系人电话-->
                  <telecom xsi:type="BAG_TEL">
                    <item use="MC" value="" capabilities="voice"/>
                  </telecom>
                  <!--联系人姓名/亲属 -->
                  <contactPerson>
                    <name xsi:type="BAG_EN">
                      <item use="IDE">
                        <part value=" "/>
                      </item>
                    </name>
                  </contactPerson>
                </contactParty>
              </patientPerson>
              <providerOrganization classCode="ORG" determinerCode="INSTANCE">
                <!--病人科室编码-->
                <id>
                  <item extension="" root="1.2.156.112713.1.1.1.4.1"/>
                </id>
                <!--病人科室名称 -->
                <name xsi:type="BAG_EN">
                  <item>
                    <part value=""/>
                  </item>
                </name>
                <asOrganizationPartOf classCode="PART">
                  <wholeOrganization determinerCode="INSTANCE" classCode="ORG">
                    <!--医疗机构代码 -->
                    <id>
                      <item extension="49557098-7"/>
                    </id>
                    <!--医疗机构名称 固定值：XX医院-->
                    <name xsi:type="BAG_EN">
                      <item>
                        <part value="山东第一医科大学第二附属医院"/>
                      </item>
                    </name>
                  </wholeOrganization>
                </asOrganizationPartOf>
              </providerOrganization>
            </patient>
          </subject>
          <!--开医嘱者/送检医生 -->
          <author typeCode="AUT">
            <!-- 开单时间 -->
            <time value=""/>
            <assignedEntity classCode="ASSIGNED">
              <!--开单医生编码 -->
              <id>
                <item extension="" root="1.2.156.112713.1.1.1.4.2"/>
              </id>
              <!--开单医生姓名 -->
              <assignedPerson determinerCode="INSTANCE" classCode="PSN">
                <name xsi:type="BAG_EN">
                  <item>
                    <part value=""/>
                  </item>
                </name>
              </assignedPerson>
              <!-- 申请科室信息 -->
              <representedOrganization determinerCode="INSTANCE" classCode="ORG">
                <!--申请科室编码 必须项已使用 -->
                <id>
                  <item extension="" root="1.2.156.112713.1.1.1.4.10"/>
                </id>
                <!--申请科室名称 -->
                <name xsi:type="BAG_EN">
                  <item>
                    <part value=""/>
                  </item>
                </name>
              </representedOrganization>
            </assignedEntity>
          </author>
          <!-- 确认人 -->
          <verifier typeCode="VRF">
            <!--确认时间 -->
            <time value=""/>
            <assignedEntity classCode="ASSIGNED">
              <!--确认人编码 -->
              <id>
                <item extension="" root="1.2.156.112713.1.1.1.4.2"/>
              </id>
              <assignedPerson determinerCode="INSTANCE" classCode="PSN">
                <!--确认人姓名 -->
                <name xsi:type="BAG_EN">
                  <item>
                    <part value=""/>
                  </item>
                </name>
              </assignedPerson>
            </assignedEntity>
          </verifier>
          <!-- 1..n(可循环)一个检查消息中可以由多个申请单。component2对应一个申请单，有多个申请单时，重复component2 -->
          <component2>
            <observationRequest classCode="OBS" moodCode="RQO">
              <!-- 检查申请单编号 必须项已使用 当场景为住院时，“检查申请单编号”为非必须入力项-->
              <id>
                <item extension=""/>
                <item extension="费用号"></item>
                <item extension="费用金额"></item>
  
              </id>
              <!-- 医嘱类型/检查类型 -->
              <code code="" codeSystem="1.2.156.112713.1.1.1.4.5/1.2.156.112713.1.1.1.4.40">
                <!-- 医嘱类型名称/检查类型 -->
                <displayName value=""/>
              </code>
              <!-- 申请单详细内容 -->
              <text value=""/>
              <!-- 检查状态 必须项未使用 A 检查开立 B 检查提交/接收 C 检查预约 D 取消预约 E 检查登记 F 检查开始 G 图像到达 H 初步报告 I 报告发布 J 取消报告-->
              <statusCode code=""/>
              <!-- 检查申请日期 -->
              <effectiveTime xsi:type="IVL_TS">
                <any value=""/>
              </effectiveTime>
              <!--标本 -->
              <specimen typeCode="SPC">
                <specimen classCode="SPEC">
                  <!--标本号-号码 必须项未使用 -->
                  <id extension=""/>
                  <!--标本类别编码 必须项已使用 -->
                  <code code="" codeSystem="1.2.156.112713.1.1.1.3.5"/>
                  <subjectOf1 typeCode="SBJ">
                    <specimenCollectionProcess moodCode="EVN" classCode="SPECCOLLECT">
                      <!--必须项未使用 -->
                      <code/>
                      <!-- 标本要求 -->
                      <text value=""/>
                    </specimenCollectionProcess>
                  </subjectOf1>
                </specimen>
              </specimen>
              <!--执行科室 -->
              <location typeCode="LOC">
                <!-- 执行时间 -->
                <time>
                  <any value=""/>
                </time>
                <serviceDeliveryLocation classCode="SDLOC">
                  <serviceProviderOrganization determinerCode="INSTANCE" classCode="ORG">
                    <!--执行科室编码 -->
                    <id>
                      <item extension="" root="1.2.156.112713.1.1.1.4.1"/>
                    </id>
                    <!-- 执行科室名称 -->
                    <name xsi:type="BAG_EN">
                      <item>
                        <part value=""/>
                      </item>
                    </name>
                  </serviceProviderOrganization>
                </serviceDeliveryLocation>
              </location>
              <!--1..n 一个申请单可以包含多个医嘱，每个医嘱对应一个component2,多个医嘱重复component2 -->
              <component2>
                <observationRequest classCode="OBS">
                  <!-- 医嘱号 -->
                  <id>
                    <item extension=""/>
                  </id>
                  <!--检查项目编码 必须项已使用 -->
                  <code code="" codeSystem="1.2.156.112713.1.1.1.4.9/1.2.156.112713.1.1.1.4.11">
                    <!--检查项目名称 -->
                    <displayName value=""/>
                  </code>
                  <!-- 医嘱描述 -->
                  <text value=""/>
                  <!-- 体征 -->
                  <tztext value=""></tztext>
                  <!-- 过敏体质过敏史 -->
                  <gmtext value=""></gmtext>
                  <!-- 其他描述 -->
                  <qttext value=""></qttext>
                  <!-- 绿色通道 -->
                  <lstd value="1"></lstd>
                  <!-- 必须项未使用 -->
                  <statusCode/>
                  <!-- validTimeLow="医嘱开始时间" validTimeHigh="医嘱结束时间"-->
                  <effectiveTime xsi:type="QSC_TS" validTimeLow="" validTimeHigh="">
                    <!-- 医嘱执行频率编码 -->
                    <code code="" codeSystem="1.2.156.112713.1.1.1.4.44">
                      <!--医嘱执行频率名称 -->
                      <displayName value=""/>
                    </code>
                  </effectiveTime>
                  <!--检查方法编码 -->
                  <methodCode>
                    <item code="" codeSystem="1.2.156.112713.1.1.1.4.41">
                      <!--检查方法名 -->
                      <displayName value=""/>
                    </item>
                  </methodCode>
                  <!--检查部位编码 -->
                  <targetSiteCode>
                    <item code="" codeSystem="1.2.156.112713.1.1.1.4.8">
                      <!--检查部位名称 -->
                      <displayName value=""/>
                    </item>
                  </targetSiteCode>
                  <!-- 收费状态标识  -->
                  <pertinentInformation typeCode="PERT" contextConductionInd="false">
                    <observation classCode="OBS" moodCode="INT">
                      <code code="" codeSystem="1.2.156.112713.1.1.1.4.15">
                        <displayName value=""/>
                      </code>
                      <value xsi:type="ST" value="0"/>
                    </observation>
                  </pertinentInformation>
                  <!-- 费用金额  -->
                  <pertinentInformation typeCode="PERT" contextConductionInd="false">
                    <observation classCode="OBS" moodCode="INT">
                      <code code="" codeSystem="1.2.156.112713.1.1.1.4.15">
                        <displayName value=""/>
                      </code>
                      <value xsi:type="ST" value="0"/>
                    </observation>
                  </pertinentInformation>
                </observationRequest>
              </component2>
              <subjectOf6 contextConductionInd="false" xsi:nil="false">
                <!-- 必须项 未使用 default=false -->
                <seperatableInd value="false"/>
                <!--申请注意事项 -->
                <annotation>
                  <text value=""/>
                  <statusCode code="completed"/>
                  <author>
                    <assignedEntity classCode="ASSIGNED"/>
                  </author>
                </annotation>
              </subjectOf6>
            </observationRequest>
          </component2>
          <!--就诊 -->
          <componentOf1 contextConductionInd="false" xsi:nil="false" typeCode="COMP">
            <!--就诊 -->
            <encounter classCode="ENC" moodCode="EVN">
              <id>
                <!-- 就诊次数 -->
                <item extension="" root="1.2.156.112713.1.1.2.1.22"/>
                <!-- 就诊流水号 -->
                <item extension="" root="1.2.156.112713.1.1.2.1.21"/>
              </id>
              <!--就诊类别编码-->
              <code codeSystem="1.2.156.112713.1.1.1.4.10" code="">
                <!-- 就诊类别名称 -->
                <displayName value=""/>
              </code>
              <!--必须项未使用 -->
              <statusCode/>
              <!--病人 必须项未使用 -->
              <subject typeCode="SBJ">
                <patient classCode="PAT"/>
              </subject>
              <!--诊断(检查申请原因) -->
              <!-- 诊断可循环，多个诊断信息对应多个pertinentInformation1 -->
              <pertinentInformation1 typeCode="PERT" xsi:nil="false">
                <observationDx classCode="OBS" moodCode="EVN">
                  <!--诊断类别编码 必须项已使用 -->
                  <code code="" codeSystem="1.2.156.112713.1.1.1.3.11">
                    <!--诊断类别名称 -->
                    <displayName value=""/>
                  </code>
                  <!-- 必须项未使用 -->
                  <statusCode code="active"/>
                  <!--诊断日期 -->
                  <effectiveTime>
                    <any value=""/>
                  </effectiveTime>
                  <!-- 疾病编码 必须项已使用 -->
                  <value code="" codeSystem="1.2.156.112713.1.1.1.1.2">
                    <!-- 疾病名称 -->
                    <displayName value=""/>
                  </value>
                </observationDx>
              </pertinentInformation1>
            </encounter>
          </componentOf1>
        </placerGroup>
      </subject>
    </controlActProcess>
  </POOR_IN200901UV>`,
    mesg: 'successful',
    success: true,
  },
};
