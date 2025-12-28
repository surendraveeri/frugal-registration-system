import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class RegistrationTest {

    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver", "C:\\selenium\\chromedriver.exe");

        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));

        driver.get("file:///C:/Users/suren/OneDrive/Desktop/frugal-registration-system/frontend/index.html");

        // Fill form
        driver.findElement(By.id("firstName")).sendKeys("Jay");
        driver.findElement(By.id("lastName")).sendKeys("Gowda");
        driver.findElement(By.id("email")).sendKeys("jay@gmail.com");
        driver.findElement(By.id("phone")).sendKeys("9876543210");
        driver.findElement(By.id("password")).sendKeys("Test@123");
        driver.findElement(By.id("confirmPassword")).sendKeys("Test@123");
        driver.findElement(By.id("terms")).click();

        // Submit
        driver.findElement(By.tagName("button")).click();

        // Close after 5 seconds
        try { Thread.sleep(5000); } catch (Exception e) {}

        driver.quit();
    }
}
