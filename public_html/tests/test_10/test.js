var test = {"name":"Report Error","description":"Test with error report","timestamp":"2014/03/16 at 16:05:40","duration":0,"parameters":null,"properties":{"Test Documentation":"Test with error report","Class":"org.jsystem.TestsExamples","Class Documentation":"My Class documentation1!!","Breadcrumb":"myScenario-->s0-->s1-->s2-->Report Error"},"reportElements":[{"title":"</span>","message":null,"status":"success","type":"html","time":"16:05:40:"},{"title":" Error","message":null,"status":"success","type":null,"time":"16:05:40:"},{"title":" Fail: Error","message":"java.lang.Exception: Error\r\n\tat org.jsystem.TestsExamples.reportError(TestsExamples.java:127)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.junit.internal.runners.TestMethod.invoke(TestMethod.java:66)\r\n\tat org.junit.internal.runners.MethodRoadie.runTestMethod(MethodRoadie.java:105)\r\n\tat org.junit.internal.runners.MethodRoadie$2.run(MethodRoadie.java:86)\r\n\tat org.junit.internal.runners.MethodRoadie.runBeforesThenTestThenAfters(MethodRoadie.java:94)\r\n\tat org.junit.internal.runners.MethodRoadie.runTest(MethodRoadie.java:84)\r\n\tat org.junit.internal.runners.MethodRoadie.run(MethodRoadie.java:49)\r\n\tat org.junit.internal.runners.JUnit4ClassRunner.invokeTestMethod(JUnit4ClassRunner.java:98)\r\n\tat org.junit.internal.runners.JUnit4ClassRunner.runMethods(JUnit4ClassRunner.java:61)\r\n\tat org.junit.internal.runners.JUnit4ClassRunner$1.run(JUnit4ClassRunner.java:54)\r\n\tat org.junit.internal.runners.ClassRoadie.runUnprotected(ClassRoadie.java:34)\r\n\tat org.junit.internal.runners.ClassRoadie.runProtected(ClassRoadie.java:44)\r\n\tat org.junit.internal.runners.JUnit4ClassRunner.run(JUnit4ClassRunner.java:52)\r\n\tat junit.framework.JSystemJUnit4ClassRunner.run(JSystemJUnit4ClassRunner.java:250)\r\n\tat junit.framework.JUnit4TestAdapterForJSystem.run(JUnit4TestAdapterForJSystem.java:86)\r\n\tat com.aqua.anttask.jsystem.JUnitTestRunner.run(JUnitTestRunner.java:461)\r\n\tat com.aqua.anttask.jsystem.JSystemTask.executeInVM(JSystemTask.java:1388)\r\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:957)\r\n\tat com.aqua.anttask.jsystem.JSystemTask.executeOrQueue(JSystemTask.java:1806)\r\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:897)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat com.aqua.anttask.jsystem.JSystemAntTask.execute(JSystemAntTask.java:88)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat com.aqua.anttask.jsystem.JSystemAntTask.execute(JSystemAntTask.java:88)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat com.aqua.anttask.jsystem.JSystemAntTask.execute(JSystemAntTask.java:88)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.Project.executeTarget(Project.java:1298)\r\n\tat org.apache.tools.ant.helper.DefaultExecutor.executeTargets(DefaultExecutor.java:41)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.Main.runBuild(Main.java:698)\r\n\tat org.apache.tools.ant.Main.startAnt(Main.java:199)\r\n\tat org.apache.tools.ant.launch.Launcher.run(Launcher.java:257)\r\n\tat org.apache.tools.ant.launch.Launcher.main(Launcher.java:104)\r\n","status":"failure","type":null,"time":"16:05:40:"},{"title":"Start time: Sun Mar 16 16:05:40 IST 2014","message":null,"status":"success","type":null,"time":"16:05:40:"},{"title":"End time  : Sun Mar 16 16:05:40 IST 2014","message":null,"status":"success","type":null,"time":"16:05:40:"},{"title":"Test running time: 0 sec.","message":null,"status":"success","type":null,"time":"16:05:40:"},{"title":" Fixture: root failTearDown","message":null,"status":"success","type":"bold","time":"16:05:40:"},{"title":" Failure in Test org.jsystem.TestsExamples.reportError","message":null,"status":"failure","type":null,"time":"16:05:40:"}]};