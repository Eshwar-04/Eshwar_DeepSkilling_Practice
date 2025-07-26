package com.mockito.Mockito;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class Ex_2_MyServiceTest {
    @Test
    public void testVerifyInteraction() {
        Ex_2_ExternalApi mockApi = mock(Ex_2_ExternalApi.class);
        Ex_2_MyService service = new Ex_2_MyService(mockApi);
        service.fetchData();
        verify(mockApi).getData("4991632 - mockito");
    }
}
